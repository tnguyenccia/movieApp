import { Component, OnInit } from '@angular/core';
import {SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {

  }
  ngOnInit(): void {
    // this.loadSplashScreen();
  }

  async loadSplashScreen(){
    await SplashScreen.hide();
    await SplashScreen.show({
      showDuration: 20,
      autoHide: true,
    });
  }

}
