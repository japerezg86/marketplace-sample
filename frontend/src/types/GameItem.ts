/**
 * Represents a game item.
 */
 export type GameItem = {
    /**
     * The game item's unique identifier
     * @type {number}
     * @memberof GameItem
     * @property id
     * @required
     * @example
     * "11111"
     */
    id: number;
  
    /**
     * The game item's name
     * @type {string}
     * @memberof GameItem
     * @property name
     * @required
     * @example
     * "Item 1"
     */
    name: string;
  
    /**
     * The game item's description
     * @type {string}
     * @memberof GameItem
     * @property description
     * @required
     * @example
     * "Item 1 Description"
     */
    description: string;
  
    /**
     * The game item's ownerId
     * @type {number}
     * @memberof GameItem
     * @property ownerId
     * @optional
     * @example
     * "12345"
     */
     ownerId: number;
  
    /**
     * The game item's price
     * @type {number}
     * @memberof GameItem
     * @property price
     * @required
     * @example
     * "10.99"
     */
     price: number;
  
    /**
     * The game item's expiry date
     * @type {string}
     * @memberof GameItem
     * @property expiry
     * @required
     * @example
     * "2022-04-30"
     */
    expiry: string;
  };
