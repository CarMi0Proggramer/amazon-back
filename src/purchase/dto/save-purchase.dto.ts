import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsPositive,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class CartProduct {
  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsUUID()
  id: string;
}

export class SavePurchaseDto {
  @IsNumber()
  @IsPositive()
  total: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartProduct)
  products: CartProduct[];
}
