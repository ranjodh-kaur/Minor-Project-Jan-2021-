import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from 'src/app/guards/student.guard';
import { StudentDashBoardComponent } from 'src/app/pages/student-dash-board/student-dash-board.component';

const routes: Routes = [
  { path: "", redirectTo: "student-dashboard", pathMatch: "full" },
  { path: "student-dashboard", component: StudentDashBoardComponent, canActivate: [StudentGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentLayoutRoutingModule { }
