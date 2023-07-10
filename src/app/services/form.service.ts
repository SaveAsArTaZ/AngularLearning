import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterForm } from '../form';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  apiUrl: string = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) {}
  addUser(data: RegisterForm): Observable<any> {
    return this.http.post<RegisterForm>(this.apiUrl, data);
  }
}
