import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EchartsComponent } from './echarts.component';
import { LineEchartsComponent } from './line-echarts/line-echarts.component';
import { MapEchartsComponent } from './map-echarts/map-echarts.component';

const routes: Routes = [
  { path: 'line_echarts', component: LineEchartsComponent },
  { path: 'map_echarts', component: MapEchartsComponent },
  { path: '', component: MapEchartsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsRoutingModule { }
