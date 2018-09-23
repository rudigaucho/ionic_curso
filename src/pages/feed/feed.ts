import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [

    MovieProvider
  ]
})
export class FeedPage {

  objeto_feed = {

titulo:"rudinei",
data:"21 setembro 2018",
descricao:"app teste",
qntd_likes:12,
qntd_coments:7,
time_coment:"11h ago"


  }

  lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public movieProvider: MovieProvider                         ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatestMovies().subscribe(data=>{
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_filmes = objeto_retorno.results;
    console.log(objeto_retorno);


    }, error=> {


      console.log(error);
    })
  }

}
