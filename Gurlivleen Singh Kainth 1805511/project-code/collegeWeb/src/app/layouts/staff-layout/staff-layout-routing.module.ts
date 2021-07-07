import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffGuard } from 'src/app/guards/staff.guard';
import { StaffDashBoardComponent } from 'src/app/pages/staff-dashboard/staff-dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "staff-dashboard", pathMatch: "full" },
  { path: "staff-dashboard", component: StaffDashBoardComponent, canActivate: [StaffGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffLayoutRoutingModule { }
