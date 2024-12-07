import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './payment/payment.module';
import { PurchaseProductModule } from './purchase-product/purchase-product.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [ProductsModule, DatabaseModule, PaymentModule, PurchaseProductModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
