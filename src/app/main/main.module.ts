import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { BarComponent } from './bar/bar.component';
import { PiechartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    BarComponent,
    PiechartComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  
  ]
})
export class MainModule { }
