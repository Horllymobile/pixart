import { Observable } from 'rxjs';
import { ICart } from './../core/models/cart';
import { CartService } from './../core/services/cart.service';
import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  carts: Observable<ICart[]>;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private actSheet: ActionSheetController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carts = this.cartService.cart;
  }

  async openMenu() {
    const actionSheet = await this.actSheet.create({
      buttons: [
        {
          text: 'Profile',
          icon: 'person-outline',
          handler: async () => {
            // await this.authService.logout();
            // this.router.navigateByUrl('/');
          }
        },
        {
          text: 'Logout',
          icon: 'log-out-outline',
          handler: async () => {
            await this.authService.logout();
            this.router.navigateByUrl('/');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });

    await actionSheet.present();
  }

}
