import { Module } from '@nestjs/common';
import { PurchaseProductService } from './purchase-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseProduct } from 'src/entities/PurchaseProduct';

@Module({
  providers: [PurchaseProductService],
  imports: [TypeOrmModule.forFeature([PurchaseProduct])],
})
export class PurchaseProductModule {}
