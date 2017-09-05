import { Component, OnInit } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
 // sobrenosotros2:any=[[]];
  constructor(public is:InformacionService) {
    // this.sobrenosotros2=is.sobrenosotros;
  }

  ngOnInit() {
  }

}
