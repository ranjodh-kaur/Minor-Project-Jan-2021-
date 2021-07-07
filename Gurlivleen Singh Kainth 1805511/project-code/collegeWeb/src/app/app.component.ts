import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'collegeWeb';

  keys: string[];
  stdRecords: any[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.getStudentRecods();

  }
}
