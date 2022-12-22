import { Component, Input } from '@angular/core';
import { SaturationService } from 'src/app/services/saturation.service';
import { Saturation } from '../../models/saturation.model';

@Component({
  selector: 'app-saturation-o2',
  templateUrl: './saturation-o2.component.html',
  styleUrls: ['./saturation-o2.component.css']
})
export class SaturationO2Component {
  @Input() color : string = 'red';
  saturationData : Saturation[]  = [] ;
  constructor(private saturationService : SaturationService){
   // this.saturationService.getSaturation();
  //  this.data =  this.saturationService.getSaturation();
  }

  ngOnInit(): void {
    this.saturationService.getSaturation().subscribe(
    data => {
      this.saturationData = data;
    }
  );
  }
}
