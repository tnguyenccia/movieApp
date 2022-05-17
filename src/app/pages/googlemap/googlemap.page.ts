import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.page.html',
  styleUrls: ['./googlemap.page.scss'],
})
export class GooglemapPage implements OnInit, AfterViewInit {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center: any = {
    lat: 50.9544349,
    lng: -113.9165663
  };

  markerId: string;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.createMap();
  }

  async createMap(){
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.googleKey,
      config: {
        center: this.center,
        zoom: 8
      }
    });

    this.addMarker(this.center.lat, this.center.lng);
  }

  async addMarker(lat, lng){
  this.markerId = await this.newMap.addMarker({
    coordinate: {
      lat,
      lng
    },
    draggable: true,
    title: 'Test title'
  });
  }

}
