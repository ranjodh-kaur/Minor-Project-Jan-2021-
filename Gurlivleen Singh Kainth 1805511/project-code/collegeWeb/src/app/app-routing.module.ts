import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffGuard } from './guards/staff.guard';
import { StudentGuard } from './guards/student.guard';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: "", redirectTo: "staff-dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: StaffLayoutComponent,
    // canActivateChild: [StaffGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts/staff-layout/staff-layout.module").then(e => e.StaffLayoutModule)
      }
    ]
  },
  {
    path: "",
    component: StudentLayoutComponent,
    // canActivateChild: [StudentGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts/student-layout/student-layout.module").then(e => e.StudentLayoutModule)
      }
    ]
  },
  { path: "**", redirectTo: "staff-dashboard" },
  // { path: "**", redirectTo: "student-dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
