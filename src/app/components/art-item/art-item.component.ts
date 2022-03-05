import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IArt } from 'src/app/core/models/art';
import { ViewArtComponent } from '../view-art/view-art.component';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.scss'],
})
export class ArtItemComponent implements OnInit {
  @Input() artItem: IArt;
  rating: number;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    // this.getRating();
  }

  getRating() {
    // this.artItem.reviews.sort((a, b) => a.rating > b.rating ? a.rating : b.rating);
    // console.log(this.artItem.reviews.sort((a, b) => a.rating > b.rating ? a.rating : b.rating));
  }

  async viewArt(art: IArt) {
    const model = await this.modalCtrl.create({
      component: ViewArtComponent,
      handle: true,
      animated: true,
      swipeToClose: true,
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 0.5,
      componentProps: {
        art
      }
    });

    await model.present();
  }
}
