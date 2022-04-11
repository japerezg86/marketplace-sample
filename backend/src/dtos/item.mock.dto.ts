import { ItemDto } from "./item.dto";

export const MockItemList: Array<ItemDto> = [
  {
    id: 11111,
    name: 'Item 1',
    description: 'Item 1 Description',
    ownerId: 12345,
    price: 10.99,
    expiry: '2022-04-20'
  },
  {
    id: 22222,
    name: 'Item 2',
    description: 'Item 2 Description',
    ownerId: 23456,
    price: 9.99,
  expiry: '2022-04-25'
  },
  {
    id: 33333,
    name: 'Item 3',
    description: 'Item 3 Description',
    ownerId: 34567,
    price: 19.00,
    expiry: '2022-04-30'
  }
]