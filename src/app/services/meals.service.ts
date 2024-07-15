import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meals } from '../interfaces/meals';

@Injectable( {
  providedIn: 'root'
} )
export class MealsService {

  constructor( private http: HttpClient ) { }

  private apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";

  getMeals(): Observable<Meals> {
    return this.http.get<Meals>( this.apiUrl );
  }

}
