import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaturationService {
  saturationDataApi : any ;
  constructor(private http : HttpClient) { 
    this.saturationDataApi = 'http://127.0.0.1:1880/saturation' ;
  }

  public getSaturation(): Observable<any> {
    return this.http.get<any>(this.saturationDataApi )  ;
  }
}
