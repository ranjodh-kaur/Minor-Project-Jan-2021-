import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffLayoutRoutingModule } from './staff-layout-routing.module';
import { StaffDashBoardComponent } from '../../pages/staff-dashboard/staff-dashboard.component';
@NgModule({
  declarations: [
    StaffDashBoardComponent
  ],
  imports: [
    CommonModule,
    StaffLayoutRoutingModule
  ]
})
export class StaffLayoutModule { }
