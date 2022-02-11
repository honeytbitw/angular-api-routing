import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(public http: HttpClient) {
  }
}