import { Body, Controller, Post } from '@nestjs/common';
import { SavePurchaseDto } from './dto/save-purchase.dto';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async save(@Body() savePurchaseDto: SavePurchaseDto) {
    return await this.purchaseService.save(savePurchaseDto);
  }
}
