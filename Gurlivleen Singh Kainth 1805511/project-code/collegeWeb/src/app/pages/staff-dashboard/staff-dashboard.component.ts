import { Component, OnInit } from '@angular/core';
import { BranchCodes } from 'src/app/classes/branch-codes';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashBoardComponent implements OnInit {

  branchCodesList: BranchCodes[] = [];

  constructor(
    private dbSerice: DatabaseService,
  ) { }

  ngOnInit(): void {

    this.dbSerice.getBranchCode();
    this.dbSerice.branchCodeSubject.subscribe(res => {
      if(res != null) {
        this.branchCodesList = res;
      }
    })
  }

}
