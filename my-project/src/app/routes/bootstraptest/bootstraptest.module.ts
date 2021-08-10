import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstraptestRoutingModule } from './bootstraptest-routing.module';
import { BootstraptestComponent } from './bootstraptest.component';
import { BootstrapTooltipComponent } from './bootstrap-tooltip/bootstrap-tooltip.component';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';


@NgModule({
  declarations: [BootstraptestComponent, BootstrapTooltipComponent, BootstrapButtonComponent],
  imports: [
    CommonModule,
    BootstraptestRoutingModule,
    NgbModule
  ]
})
export class BootstraptestModule { }
