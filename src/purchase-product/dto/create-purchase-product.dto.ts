import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsUUID, ValidateNested } from 'class-validator';

class ProductDto {
  @IsUUID()
  id: string;
}

class PurchaseDto {
  @IsUUID()
  id: string;
}

export class CreatePurchaseProductDto {
  @IsNumber()
  @IsPositive()
  quantity: number;

  @ValidateNested()
  @Type(() => ProductDto)
  product: ProductDto;

  @ValidateNested()
  @Type(() => PurchaseDto)
  purchase: PurchaseDto;
}
