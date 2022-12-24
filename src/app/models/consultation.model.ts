import { Medecin } from './medecin.model';
import { Patient } from './patient.model';
export class Consultation {
     id : number = 0;
     date : Date = new Date();
     note : number = 0;
     rapport :string = '';
     status : string = '';
     medecin : Medecin = new Medecin();
     patient : Patient = new Patient() ;
}
