import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
 termino:string;
 productofiltrado:any[]=[];
  constructor(private route:ActivatedRoute,private ps:ProductosService) {
    this.buscarProducto();
  }

public buscarProducto(){
  this.route.params.subscribe(parametros=>{
    this.termino=parametros['termino'];
  this.ps.buscarProducto(this.termino);
  });
}

  ngOnInit() {
  }

}
