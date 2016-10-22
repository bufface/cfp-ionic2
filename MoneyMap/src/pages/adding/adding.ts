import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class Adding {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Adding Page');
  }

}
