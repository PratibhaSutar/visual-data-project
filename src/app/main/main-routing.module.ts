import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { LandingComponent } from './landing/landing.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {path:"", component:LandingComponent, children:[
    {path:"bar", component:BarComponent},
    {path:"piechart", component:PiechartComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
