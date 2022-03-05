import { ICart } from './../../core/models/cart';
import { CartService } from './../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ViewDidEnter, ModalController } from '@ionic/angular';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IArt } from 'src/app/core/models/art';
import { CheckoutComponent } from 'src/app/components/checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, ViewDidEnter {
  cart: ICart[] = [];
  totalPrice = 0;
  constructor(
    private cartService: CartService,
    private alerCtrl: AlertController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.getCart();
  }

  ionViewDidEnter(): void {
    this.getCart();
  }

  async checkout(){
    const modal = await this.modalCtrl.create({
      component: CheckoutComponent,
      componentProps: { cart: this.cart },
      swipeToClose: true,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  getCart() {
    this.cart = this.cartService.cart.value;
    this.totalPrice = 0;
    if(this.cart.length){
      this.cart.forEach(val => {
        this.totalPrice += val.cartPrice;
      });
      return;
    }
  }

  plusItem(itemId: number) {
    this.totalPrice = 0;
    this.cartService.plusItem(itemId);
    this.getCart();
  }

  minusItem(itemId: number){
    this.totalPrice = 0;
    this.cartService.minusItem(itemId);
    this.getCart();
  }

 async clear(){
  const alert = await this.alerCtrl.create({
    header: 'Clear Cart',
    message: 'Are you sure?.',
    buttons: ['CANCLE', {
      text: 'Yes',
      handler: () => {
        this.totalPrice = 0;
        this.cartService.clearCart();
        this.getCart();
      }
    }]
  });
  await alert.present();
 }
}
