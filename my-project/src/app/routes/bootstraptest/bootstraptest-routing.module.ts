import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapTooltipComponent } from './bootstrap-tooltip/bootstrap-tooltip.component';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';
const routes: Routes = [
  { path: '',
    children: [
      { path: 'bootstrap_tooltip', component: BootstrapTooltipComponent },
      { path: 'bootstrap_button', component: BootstrapButtonComponent },
      { path: '', component: BootstrapTooltipComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstraptestRoutingModule { }
