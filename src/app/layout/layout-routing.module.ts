import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../feature/home/home.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component:MainComponent ,
  children: [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
