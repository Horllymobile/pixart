import { AddToCartComponent } from './../add-to-cart/add-to-cart.component';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { IArt } from 'src/app/core/models/art';
import { ArtsService } from 'src/app/core/services/arts.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-view-art',
  templateUrl: './view-art.component.html',
  styleUrls: ['./view-art.component.scss'],
})
export class ViewArtComponent implements OnInit {

  @Input() art: IArt;
  constructor(
    private artService: ArtsService,
    private cartService: CartService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async addToCart(art: IArt) {
    const modal = await this.modalCtrl.create({
      component: AddToCartComponent,
      breakpoints: [0.1, 0.2, 0.3, 0.4],
      initialBreakpoint: 0.3,
      swipeToClose: true,
      animated: true,
      componentProps: { art },
    });
    await modal.present();
  }

  bookMark(art: IArt){
    this.artService.bookMarked(art);
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
