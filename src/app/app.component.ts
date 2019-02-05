import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBBgoGfJIV_EyZhVSr7bNaE3RCnbnlPRmc",
    authDomain: "roleragem.firebaseapp.com",
    databaseURL: "https://roleragem.firebaseio.com",
    projectId: "roleragem",
    storageBucket: "roleragem.appspot.com",
    messagingSenderId: "478401436774"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
