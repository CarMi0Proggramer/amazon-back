import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsUrl()
  urlImg: string;

  @IsNumber()
  @IsOptional()
  previousPrice: number;

  @IsNumber()
  @IsOptional()
  reviews: number;
}
