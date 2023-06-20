import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
//import { FooterComponent } from './layout/footer/footer.component';
//import { HeaderComponent } from './layout/header/header.component';
//import { SidebarComponent } from './layout/sidebar/sidebar.component';
//import { PreProgramacionComponent } from './feature/pre-programacion/pre-programacion.component';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { FeatureModule } from './feature/feature.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    //BreadcrumbsComponent,
    //FooterComponent,
    //HeaderComponent,
    //SidebarComponent,
    //PreProgramacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
