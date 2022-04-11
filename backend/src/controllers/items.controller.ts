import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemDto } from '../dtos/item.dto';
import { ItemsService } from '../providers/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  /**
   * Gets all items
   * 
   * @returns list of items
   */
  @Get('all')
  getAll(): Array<ItemDto> {
    return this.itemService.getAll();
  }

  /**
   * Gets a single item based on a matching itemId
   * Note this endpoint uses the param provided as part of the URL
   * as denoted by :id in the decorator
   * 
   * @param id the itemId
   * @returns an item
   */
  @Get('/byItemId/:id')
  getByItemId(@Param('id') id: number): ItemDto {
    return this.itemService.getByItemId(id);
  }

  /**
   * Gets a single item based on a matching ownerId
   * 
   * @param id the ownerId
   * @returns an item
   */
  @Get('/byOwnerId/:id')
  getByOwnerId(@Param('id') id: number): ItemDto {
    return this.itemService.getByOwnerId(id);
  }

  /**
   * Creates an item based on the provided itemDto
   * Note this endpoint uses the body to create the object
   * 
   * @param itemDto the item object
   * @returns the response message
   */
  @Post('createItem')
  createItem(@Body() itemDto: ItemDto): string {
    // This requires better body validation, but good enough for now
    if ( !itemDto || !itemDto.id ) {
      return 'Failed to create item. The item values are not correct.'
    }
    return this.itemService.createItem(itemDto);
  }

  /**
   * Deletes an item based on the itemId
   * 
   * @param itemId the item id
   * @returns the response message
   */
  @Delete('deleteItem')
  deleteItem(@Body() itemId: number): string {
    // This requires better body validation, but good enough for now
    if ( !itemId ) {
      return 'Failed to delete item.'
    }
    return this.itemService.deleteItem(itemId);
  }

  /**
   * Buys an item by transferring the ownership to another owner
   * 
   * @param itemId the item id
   * @returns the response message
   */
  @Post('buyItem')
  buyItem(@Body() itemId: number): string {
    // This requires better body validation, but good enough for now
    if ( !itemId ) {
      return 'Failed to purchase item.'
    }
    return this.itemService.buyItem(itemId);
  }
}
