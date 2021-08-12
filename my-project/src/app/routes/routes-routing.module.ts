import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bootstraptest', loadChildren: () => import('./bootstraptest/bootstraptest.module').then(m => m.BootstraptestModule) },
  { path: 'echarts', loadChildren: () => import('./echarts/echarts.module').then(m => m.EchartsModule) },
  { path: 'map-gaode', loadChildren: () => import('./echarts/map-gaode/map-gaode.module').then(m => m.MapGaodeModule) },
  { path: '', loadChildren: () =>  import('./echarts/map-gaode/map-gaode.module').then(m => m.MapGaodeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
