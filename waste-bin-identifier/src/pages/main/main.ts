import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
myphoto:any;
photo:any;
lat:any;
lng:any;
param1:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public geo: Geolocation, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner ) {
    this.param1 = navParams.get('param1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch(err => console.log(err));
  }
  ngOnInit(){
  this.photo = [];
  }
  opencamera(){
   const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  saveToPhotoAlbum: true,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):

 this.myphoto = 'data:image/jpg;base64,' + imageData;
 this.photo.push(this.myphoto);
 this.photo.reverse();
}, (err) => {
 // Handle error
});
  }
  deletephoto(index){
   const confirm = this.alertCtrl.create({
       title: 'Delete ?',
       message: 'Do you want to Delete the Picture?',
       buttons: [
         {
           text: 'No',
           handler: () => {

           }
         },
         {
           text: 'Yes',
           handler: () => {
            this.photo.splice(index,1);
           }
         }
       ]
     });
     confirm.present();
  }
}
