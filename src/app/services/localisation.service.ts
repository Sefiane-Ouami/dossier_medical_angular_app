import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  localisationDataApi : any ;
  constructor(private http : HttpClient) { 
    this.localisationDataApi = 'http://127.0.0.1:1880/localisation' ;
  }

  public getLocalisation(): Observable<any> {
    return this.http.get<any>(this.localisationDataApi);
  }
  
  
}
