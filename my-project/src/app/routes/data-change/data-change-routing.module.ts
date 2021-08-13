import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataChangeComponent } from './data-change.component';

const routes: Routes = [{ path: '', component: DataChangeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataChangeRoutingModule { }
