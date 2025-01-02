import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from '../entities/Purchase';
import { PurchaseProductService } from '../purchase-product/purchase-product.service';
import { PurchaseProduct } from '../entities/PurchaseProduct';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService, PurchaseProductService],
  imports: [TypeOrmModule.forFeature([Purchase, PurchaseProduct])],
})
export class PurchaseModule {}
