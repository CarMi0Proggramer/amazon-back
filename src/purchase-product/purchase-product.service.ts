import { Injectable } from '@nestjs/common';
import { CreatePurchaseProductDto } from './dto/create-purchase-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseProduct } from 'src/entities/PurchaseProduct';
import { Repository } from 'typeorm';

@Injectable()
export class PurchaseProductService {
  constructor(
    @InjectRepository(PurchaseProduct)
    private readonly purchaseProductRepository: Repository<PurchaseProduct>,
  ) {}

  async create(
    createPurchaseProductDto: CreatePurchaseProductDto,
  ): Promise<CreatePurchaseProductDto> {
    return await this.purchaseProductRepository.save(createPurchaseProductDto);
  }
}
