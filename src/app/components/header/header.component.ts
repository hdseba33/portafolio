import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {InformacionService} from '../../services/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  constructor(public is:InformacionService,private router:Router) {
  }
   buscarProducto(termino:string){
     this.router.navigate(['buscar',termino]);
   }
}
