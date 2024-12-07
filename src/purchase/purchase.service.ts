import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from 'src/entities/Purchase';
import { PurchaseProductService } from 'src/purchase-product/purchase-product.service';
import { Repository } from 'typeorm';
import { SavePurchaseDto } from './dto/save-purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchaseRepository: Repository<Purchase>,
    private readonly purchaseProductService: PurchaseProductService,
  ) {}

  async save(savePurchaseDto: SavePurchaseDto): Promise<{ message: string }> {
    const purchase = await this.purchaseRepository.save({
      total: savePurchaseDto.total,
    });

    this.createPurchaseProducts(purchase.id, savePurchaseDto.products);

    return { message: 'Purchase saved Successfully' };
  }

  private async createPurchaseProducts(
    purchaseId: string,
    products: { id: string; quantity: number }[],
  ) {
    const purchaseProducts = products.map((product) => {
      return {
        product: {
          id: product.id,
        },
        quantity: product.quantity,
        purchase: {
          id: purchaseId,
        },
      };
    });

    purchaseProducts.forEach((purchaseProduct) => {
      this.purchaseProductService.create(purchaseProduct);
    });
  }
}
