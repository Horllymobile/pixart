import { IArt } from 'src/app/core/models/art';
import { Injectable } from '@angular/core';
import { ICart } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: BehaviorSubject<ICart[]> = new BehaviorSubject(null);

  constructor() {
    this.carts.next(JSON.parse(localStorage.getItem('CART')) || []);
  }

  get cart() {
    return this.carts;
  }

  getCarts(): ICart[] {
    return this.carts.value;
  }

  getCartItem(artId: number): ICart {
    return this.carts.value.find(value => value.artId === artId);
  }

  plusItem(itemId: number) {
    const c = this.carts.value.find(value => value.id === itemId);
    const pos = this.carts.value.findIndex(val => val.id === itemId);
    if(c.count >= 1) {
      this.cart.value.splice(pos, 1);
      c.count += 1;
      c.cartPrice += c.price;
      this.carts.value.splice(pos, 0, c);
      localStorage.setItem('CART', JSON.stringify(this.carts.value));
    }
  }

  minusItem(itemId: number) {
    const c = this.carts.value.find(value => value.id === itemId);
    const pos = this.carts.value.findIndex(val => val.id === itemId);
    const data = this.carts.value;
    if(c.count > 1) {
      this.cart.value.splice(pos, 1);
      c.count -= 1;
      c.cartPrice -= c.price;
      this.carts.value.splice(pos, 0, c);
      localStorage.setItem('CART', JSON.stringify(this.carts.value));
    }else {
      this.deleteItem(itemId);
    }
  }

  addToCart(art: IArt, count: number) {
    let item: ICart;
    if(count > 1){
      item = {
        id: Math.floor(Math.random() * 100),
        img: art.image,
        artId: art.id,
        title: art.title,
        author: art.author.userName,
        count,
        price: art.price,
        cartPrice: (count * art.price)
      };
      this.checkItem(item);
    }else {
      item = {
        id: Math.floor(Math.random() * 100),
        img: art.image,
        artId: art.id,
        title: art.title,
        author: art.author.userName,
        count,
        price: art.price,
        cartPrice: art.price
      };
      this.carts.value.push(item);
      localStorage.setItem('CART', JSON.stringify(this.carts.value));
    }
  }

  checkItem(item: ICart) {
    const cart: ICart = this.carts.value.find(value => value.artId === item.artId);
    const pos = this.carts.value.findIndex(value => value.artId === item.artId);
    if(pos !== -1){
      this.carts.value.splice(pos, 1);
      cart.count += cart.count;
      cart.cartPrice += cart.cartPrice;
      this.carts.value.splice(pos, 0, cart);
      localStorage.setItem('CART', JSON.stringify(this.carts.value));
    }else {
      this.carts.value.push(item);
      localStorage.setItem('CART', JSON.stringify(this.carts.value));
    }
  }

  deleteItem(id: number) {
    const pos = this.carts.value.findIndex(value => value.artId === id);
    this.carts.value.splice(pos, 1);
    localStorage.setItem('CART', JSON.stringify(this.carts.value));
  }

  clearCart() {
    this.carts.next([]);
    localStorage.setItem('CART', JSON.stringify(this.carts.value));
  }
}
