import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountItemPipe } from './count-item.pipe';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    CountItemPipe
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CountItemPipe,
    ComponentsModule
  ]
})
export class SharedModule { }
