import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentLayoutRoutingModule } from './student-layout-routing.module';
import { StudentDashBoardComponent } from '../../pages/student-dash-board/student-dash-board.component';


@NgModule({
  declarations: [
    StudentDashBoardComponent
  ],
  imports: [
    CommonModule,
    StudentLayoutRoutingModule
  ]
})
export class StudentLayoutModule { }
