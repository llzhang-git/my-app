import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataChangeRoutingModule } from './data-change-routing.module';
import { DataChangeComponent } from './data-change.component';


@NgModule({
  declarations: [DataChangeComponent],
  imports: [
    CommonModule,
    DataChangeRoutingModule,
    NgbModule
  ]
})
export class DataChangeModule { }
