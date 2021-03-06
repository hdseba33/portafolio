import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {PortafolioComponent} from './components/portafolio/portafolio.component';
import {PortfolioItemComponent} from './components/portfolio-item/portfolio-item.component';
import {BuscarComponent} from './components/buscar/buscar.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: PortfolioItemComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
