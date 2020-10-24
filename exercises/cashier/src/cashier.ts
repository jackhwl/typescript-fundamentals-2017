export interface CartItem {
    name: string;
    price: number;
    qty: number;
}

export interface CartAPI {
    length: number;
    total: number;
    addItem(item: CartItem): CartAPI;
    add(name: string, price: number, qty: number): CartAPI;
}


export function cashier() : CartAPI {
  let carts: CartItem[] = [];

  return {
      get length() { return carts.reduce((acc, cartItem) => acc + cartItem.qty, 0) },
      get total() { return carts.reduce((acc, cartItem) => acc + cartItem.price * cartItem.qty, 0) },
      addItem(item) {
        carts.push(item);
        return this;
      },
      add(name, price, qty=1) {
        carts.push({name, price, qty});
        return this;
      }
  };
}
