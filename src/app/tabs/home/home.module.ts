import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ArtsService } from 'src/app/core/services/arts.service';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    provideFirestore(() => getFirestore()),
  ],
  declarations: [HomePage],
  providers: [
    ArtsService,
  ]
})
export class HomePageModule {}
