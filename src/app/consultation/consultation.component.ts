import { Component } from '@angular/core';
import { Consultation } from '../models/consultation.model';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  consultationData : Consultation[]  = [] ;
  constructor(private consultationService : ConsultationService){

   }
   ngOnInit(): void {
    this.consultationService.getConsultations().subscribe(
    data => {
      this.consultationData = data;
    }
  );
  console.log(this.consultationData);
  }
}
