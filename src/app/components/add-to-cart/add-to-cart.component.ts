import { ModalController } from '@ionic/angular';
import { IArt } from './../../core/models/art';
import { Component, Input, OnInit } from '@angular/core';
import { ArtsService } from 'src/app/core/services/arts.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  @Input() art: IArt;
  item = 0;
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async close(){
    await this.modalCtrl.dismiss();
  }

  async save(art: IArt, item: number) {
    if(item > 0){
      console.log(item);
      this.cartService.addToCart(art, item);
      await this.modalCtrl.dismiss();
    }
  }

}
