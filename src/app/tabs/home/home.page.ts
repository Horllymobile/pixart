import { ArtsService } from './../../core/services/arts.service';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { ModalController, ModalOptions, ViewDidEnter } from '@ionic/angular';
import { IArt } from 'src/app/core/models/art';
import { AddArtComponent } from './../../components/add-art/add-art.component';
import { ViewArtComponent } from 'src/app/components/view-art/view-art.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, ViewDidEnter{
  user: User;
  artList: IArt[];
  filteredList: IArt[];
  constructor(
    private modalCtrl: ModalController,
    private artService: ArtsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

      setTimeout(() => {
        this.artList = this.artService.getArts();
        console.log(this.artList);
        this.filteredList = this.artList;
      }, 3000);
  }

  ionViewDidEnter(): void {
    this.getUser();
  }

  getUser(): void {
    this.authService.currentUser.subscribe({
      next: (res: User) => {
        this.user = res;
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  search(event){
    const value: string = event.target.value;

    if(value !== ''){
      this.filteredList = this.
      filteredList.filter(val => val.title.toLowerCase().includes(value.toLowerCase()));
    }else {
      this.filteredList = this.artList;
    }
  }

  async viewArt(art: IArt) {
    const model = await this.modalCtrl.create({
      component: ViewArtComponent,
      handle: true,
      animated: true,
      swipeToClose: true,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      componentProps: {
        art
      }
    });

    await model.present();
  }


  async addArt() {
    const model = await this.modalCtrl.create({
      component: AddArtComponent,
      handle: true,
      animated: true,
      swipeToClose: true,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });

    await model.present();
  }


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
}
