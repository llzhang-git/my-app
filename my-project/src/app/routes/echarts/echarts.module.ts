import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartsRoutingModule } from './echarts-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

// 组件
import { EchartsComponent } from './echarts.component';
import { LineEchartsComponent } from './line-echarts/line-echarts.component';
import { MapEchartsComponent } from './map-echarts/map-echarts.component';


@NgModule({
  declarations: [
    EchartsComponent,
    LineEchartsComponent,
    MapEchartsComponent
  ],
  imports: [
    CommonModule,
    EchartsRoutingModule,
    NgxEchartsModule
  ]
})
export class EchartsModule { }
