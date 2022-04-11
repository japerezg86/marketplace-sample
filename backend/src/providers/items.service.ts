import { Injectable } from '@nestjs/common';
import { ItemDto } from '../dtos/item.dto';
import { MockItemList } from '../dtos/item.mock.dto';

@Injectable()
export class ItemsService {
  getAll(): Array<ItemDto> {
    return MockItemList;
  }

  getByItemId(id: number): ItemDto {
    const matchingItem = MockItemList.find(e => e.id == id);
    return matchingItem;
  }

  getByOwnerId(id: number): ItemDto {
    const matchingItem = MockItemList.find(e => e.ownerId == id);
    return matchingItem;
  }

  createItem(itemDto: ItemDto): string {
    // no real logic here since no DB will be connected to this sample app
    return 'You listed a new item: ' + JSON.stringify(itemDto);
  }

  deleteItem(id: number): string {
    // no real logic here since no DB will be connected to this sample app
    return `You deleted item: ${id}`;
  }

  buyItem(id: number): string {
    // no real logic here since no DB will be connected to this sample app
    return `Succesfully purchased item: ${id}`;
  }
}
