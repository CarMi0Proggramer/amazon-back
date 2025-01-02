import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto';
import Stripe from 'stripe';
import { envs } from 'src/config/envs';

@Injectable()
export class PaymentService {
  stripe;

  constructor() {
    this.stripe = new Stripe(envs.stripe.secretKey);
  }

  async checkout(checkoutDto: CheckoutDto): Promise<{ checkoutUrl: string }> {
    const result = await this.stripe.checkout.sessions.create({
      line_items: checkoutDto.products.map(({ product, quantity }) => {
        return {
          price_data: {
            currency: 'USD',
            product_data: {
              name: product.name,
              images: [product.urlImg],
            },
            unit_amount: product.price * 100,
          },
          quantity: quantity,
        };
      }),
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: 'https://amazon-front-gamma.vercel.app/payment/success',
      cancel_url: 'https://amazon-front-gamma.vercel.app/',
    });

    if (!result.url) {
      throw new InternalServerErrorException();
    }

    return {
      checkoutUrl: result.url,
    };
  }
}
