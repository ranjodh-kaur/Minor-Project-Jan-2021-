import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BranchCodes } from '../classes/branch-codes';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  branchCodeSubject = new BehaviorSubject<BranchCodes[]>(null);

  constructor(
    private http: HttpClient
  ) { }

  getBranchCode() {
    this.http.get(`${environment.serverUrl}/branch-codes`)
      .subscribe(result => {
        if(result['response'] != null) {
          this.branchCodeSubject.next(result['response']);
        }
      })
  }
}
