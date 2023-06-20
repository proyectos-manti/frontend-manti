import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreProgramacionComponent } from './pre-programacion/pre-programacion.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PreProgramacionComponent,
    HomeComponent,
    ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ]
})
export class FeatureModule { }
