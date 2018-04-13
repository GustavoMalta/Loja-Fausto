import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from './../../services/produto';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [
    ProdutoService
  ]
})
export class DetailsPage implements OnInit{
  public produto : any;
  codigo : number = this.navParam.data ;

  constructor(public navCtrl: NavController, public navParam: NavParams, public ps : ProdutoService) {
  }


  ngOnInit() {
    
  this.produto = this.navParam.data;
  
      }

goBack() {
    this.navCtrl.pop();
  }
  
}
