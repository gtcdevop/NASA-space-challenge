import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BottonMenuComponentPage } from './botton-menu-component';

@NgModule({
  declarations: [
    BottonMenuComponentPage,
  ],
  imports: [
    IonicPageModule.forChild(BottonMenuComponentPage),
  ],
})
export class BottonMenuComponentPageModule {}
