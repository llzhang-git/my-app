import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapGaodeComponent } from './map-gaode.component';

const routes: Routes = [
  { path: '', component: MapGaodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapGaodeRoutingModule { }
