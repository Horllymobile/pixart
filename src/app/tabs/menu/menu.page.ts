import { Component, OnInit } from '@angular/core';
import { ModalController, ViewDidEnter } from '@ionic/angular';
import { IArt } from 'src/app/core/models/art';
import { ArtsService } from 'src/app/core/services/arts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, ViewDidEnter {
  artList: IArt[];
  filteredList: IArt[];

  constructor(
    private modalCtrl: ModalController,
    private artService: ArtsService
  ) { }

  ngOnInit() {
    this.getBookMarkedArts();
  }

  ionViewDidEnter(): void {
    this.getBookMarkedArts();
  }

  getBookMarkedArts() {
    this.artList = this.artService.getBookMarkedArts();
    this.filteredList = this.artList;
  }

  search(event){
    const value: string = event.target.value;
    if(value !== ''){
      this.filteredList = this.artService.searchBookMarked(value);
    }else {
      this.filteredList = this.artList;
    }
  }
}
