export class Item {
  ItemNo: number;
  ItemName: string;
  price: number;

  constructor(itemNo: number, itemName: string, price: number) {
      this.ItemNo = itemNo;
      this.ItemName = itemName;
      this.price = price;
  }
}
