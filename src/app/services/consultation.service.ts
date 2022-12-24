import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  consultationDataApi : any ;

  constructor(private http : HttpClient) { 
    this.consultationDataApi = 'http://127.0.0.1:8080/consultations' ;
  }

  public getConsultations(): Observable<any> {
    return this.http.get<any>(this.consultationDataApi )  ;
  }
}
