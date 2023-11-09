import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppurl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppurl = environment.apiUrl;
    this.myApiUrl = '/usuarios/';
   }
   getlistUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.myAppurl}${this.myApiUrl}`);
   }

   deleteUser(staff_num: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppurl}${this.myApiUrl}${staff_num}`)
   }

   saveUser(user:User):Observable<void> {
    return this.http.post<void>(`${this.myAppurl}${this.myApiUrl}`,user)
   }

   getUser(staff_num:number):Observable<User> {
    return this.http.get<User>(`${this.myAppurl}${this.myApiUrl}${staff_num}`)
   }

   updateUser(staff_num:number, user:User):Observable<void> {
    return this.http.put<void>(`${this.myAppurl}${this.myApiUrl}${staff_num}`, user)
   }

}
