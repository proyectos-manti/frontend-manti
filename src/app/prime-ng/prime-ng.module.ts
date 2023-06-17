import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
//import { MenuItem } from 'primeng/api';
//import {PanelMenuModule} from 'primeng-lts/panelmenu';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [],

  exports: [

    MenuModule,
    SidebarModule,
    MenubarModule,
    //MenuItem,
    PanelMenuModule
  ],

  imports: [
    CommonModule
    //PanelMenuModule
  ]
})
export class PrimeNgModule { }
