import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapGaodeRoutingModule } from './map-gaode-routing.module';
import { MapGaodeComponent } from './map-gaode.component';


@NgModule({
  declarations: [MapGaodeComponent],
  imports: [
    CommonModule,
    MapGaodeRoutingModule
  ]
})
export class MapGaodeModule { }
