import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module'

@NgModule({
    declarations: [
    SidebarComponent,
  ],
  exports: [
   SidebarComponent,
  ],
  imports: [
   CommonModule,
   PrimeNgModule,
  ],

})
export class LayoutModule { }
