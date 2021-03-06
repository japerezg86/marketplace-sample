import { Module } from '@nestjs/common';
import { ItemsController } from '../controllers/items.controller';
import { ItemsService } from '../providers/items.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
