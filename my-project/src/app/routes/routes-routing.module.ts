import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bootstraptest', loadChildren: () => import('./bootstraptest/bootstraptest.module').then(m => m.BootstraptestModule) },
  { path: '', loadChildren: () => import('./bootstraptest/bootstraptest.module').then(m => m.BootstraptestModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
