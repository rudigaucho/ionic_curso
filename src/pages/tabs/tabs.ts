import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { IntroPage } from '../intro/intro';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { SobrePage } from '../sobre/sobre';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConfiguracoesPage;
 
  tab4Root = FeedPage;


  constructor() {

  }
}
