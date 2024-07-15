import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/user-data';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ContactService {

  constructor( private http: HttpClient ) { }

  private apiUrl = "http://upskilling-egypt.com:3001/contact";

  postUserData( data: UserData ): Observable<UserData> {
    return this.http.post<UserData>( this.apiUrl, data );
  }

}
