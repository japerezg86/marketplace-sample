import { Test, TestingModule } from '@nestjs/testing';
import { MockItemList } from '../dtos/item.mock.dto';
import { ItemsController } from '../controllers/items.controller';
import { ItemsService } from '../providers/items.service';

describe('ItemsController', () => {
  let itemsController: ItemsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService],
    }).compile();

    itemsController = app.get<ItemsController>(ItemsController);
  });

  describe('Items Controller', () => {
    it('should return all items', () => {
      expect(itemsController.getAll()).toBe(MockItemList);
    });

    it('should return an item based on itemId', () => {
      expect(itemsController.getByItemId(11111)).toBe(MockItemList[0]);
    });

    it('should return an item based on ownerId', () => {
      expect(itemsController.getByOwnerId(23456)).toBe(MockItemList[1]);
    });

    it('should return a good response when a valid item is created', () => {
      const mockItem = MockItemList[0];
      expect(itemsController.createItem(mockItem)).toBe('You listed a new item: ' + JSON.stringify(mockItem));
    });

    it('should return a good reponse when a valid item is deleted', () => {
      const id = 33333;
      expect(itemsController.deleteItem(id)).toBe(`You deleted item: ${id}`);
    });

    it('should return a good response when a valid item is purchased', () => {
      const id = 11111;
      expect(itemsController.buyItem(id)).toBe(`Succesfully purchased item: ${id}`);
    });
  });
});
