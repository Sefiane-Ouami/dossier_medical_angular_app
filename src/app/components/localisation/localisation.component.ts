import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LocalisationService } from 'src/app/services/localisation.service';

declare var google: any

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {
  @Input() lat: number = 35.5707;
  @Input() lng: number = -5.3687;
  @Input() title: string = 'Tetouan';

  options: any;
  overlays: any[] = [];
  markerTitle?: string | null;
  infoWindow: any;
  draggable: boolean = false;
  
  constructor(private messageService: MessageService,private localisationService : LocalisationService) { 
    console.log("constructor");
    this.setLatLong();
  }
  
  ngOnInit(): void {
     // 
     this.setLatLong();
    // this function is called when the map is ready to be used 
    this.options = {
    center: { lat: this.lat, lng: this.lng },
    zoom: 12
    };
 
    // initOverlays() is called to load the markers on the map
    this.initOverlays();
    this.infoWindow = new google.maps.InfoWindow();
   
  }
  
  // set latitude and longitude
  setLatLong() {
      this.localisationService.getLocalisation().subscribe(
      data => {
        this.lat = data.lat;
        this.lng = data.lon;
        console.log(this.lat);
        console.log(this.lng);
      }
    );
    setTimeout('', 5000);
  }
  
  // handleOverlayClick is called when a marker is clicked
  handleOverlayClick(event: any) {
    let isMarker = event.overlay.getTitle != undefined;
    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
      this.messageService.add({ severity: 'info', summary: 'Marker Selected', detail: title });
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Shape Selected', detail: '' });
    }
  }
  
 
  // handleMapClick is called when the map is clicked
  handleDragEnd(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
  }
  // initOverlays is called to load the markers on the map
  initOverlays() {
    console.log("initOverlays");
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
      new google.maps.Marker({ position: { lat: this.lat, lng: this.lng }, title: this.title })
      ];
    }
  }
  
  zoomIn(map: any) {
    map.setZoom(map.getZoom() + 1);
  }
  
  zoomOut(map: any) {
    map.setZoom(map.getZoom() - 1);
  }
  
  
}


// execution order
// 1. constructor
// 2. ngOnInit 
  // options 
// 3. setLatLong
// 4. initOverlays
// 5. handleOverlayClick
// 6. handleDragEnd
// 7. zoomIn
// 8. zoomOut
