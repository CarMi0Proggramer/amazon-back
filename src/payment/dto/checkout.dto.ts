import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class ProductDto {
  @IsUUID()
  id: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  urlImg: string;
}

class CheckoutProduct {
  @IsObject()
  @ValidateNested()
  @Type(() => ProductDto)
  product: ProductDto;

  @IsNumber()
  @IsPositive()
  quantity: number;
}

export class CheckoutDto {
  @IsNumber()
  @IsPositive()
  total: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CheckoutProduct)
  products: CheckoutProduct[];
}
