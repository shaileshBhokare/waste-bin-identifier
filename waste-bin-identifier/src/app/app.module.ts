import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}