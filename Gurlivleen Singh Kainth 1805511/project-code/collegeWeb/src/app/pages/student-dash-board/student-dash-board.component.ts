import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-dash-board',
  templateUrl: './student-dash-board.component.html',
  styleUrls: ['./student-dash-board.component.css']
})
export class StudentDashBoardComponent implements OnInit {

  user: any;
  requestTable: any[] = [];

  msg: string[] = [];
  values: any = null;

  userTypes: string[] = [
    'hod',
    'feeClerk',
    'careTaker',
    'clgLibrary',
    'supdt',
    'chiefWarden',
    'recordKeeper',
    'academicClerk',
    'messAccountant',
    'programCoordinator',
    'advisor/supervisor',
    'training&Placement',
    'uniLibraryExtension'
  ]

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userObj'));
  }

  requestNoDuesCertificate() {
    this.values = null;
    this.requestTable = [];
    for(let type of this.userTypes) {
      this.requestTable.push({
        university_roll_no: this.user['university_roll_no'],
        request_id: Math.random().toString().substr(2, 6),
        verified_by: type,
        verified: 0,
        dues: 0,
        requestCreated: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-us'),
        requestAccepted: null,
        show_branch_code: this.user['show_branch_code']
      });
    }

    this.values = this.requestTable.map((e, idx) => {
      let obj = Object.values(e);
      return obj
    });

    this.httpClient.post(`${environment.serverUrl}/requests`, { data: this.values })
      .subscribe(response => {
        console.log(response);

      })
  }

  jsonStringifyFun(e) {
    return JSON.stringify(e);
  }

}
