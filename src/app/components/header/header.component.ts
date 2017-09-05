import { Component } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {

  constructor(public is:InformacionService) {}

}
