import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[]=[];
  cargandoproductos:boolean=false;
  constructor(private http:Http) {
    this.cargarProductos();
  }
  public cargarProductos(){
    this.http.get("https://portafolio-15e59.firebaseio.com/productos_idx.json").subscribe(res=>{
      console.log(res.json());
      this.cargandoproductos=true;
    });
  }
}
