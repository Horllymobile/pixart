import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ViewArtComponent } from './view-art/view-art.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { AddArtComponent } from './add-art/add-art.component';
import { IonicModule } from '@ionic/angular';
import { ArtItemComponent } from './art-item/art-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    ArtItemComponent,
    AddArtComponent,
    CheckoutComponent,
    ViewArtComponent,
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  exports: [
    ArtItemComponent,
    AddArtComponent,
    CheckoutComponent,
    ViewArtComponent
  ]
})
export class ComponentsModule { }
