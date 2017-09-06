import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {
  productos:any[]=[];
  cargandoproductos:boolean=false;
  producto:any=undefined;
  constructor(private http:Http) {
    this.cargarProductos();
  }
  public cargarProducto(cod:string){
    return this.http.get("https://portafolio-15e59.firebaseio.com/productos/"+cod+".json");
  }

  public cargarProductos(){
    this.cargandoproductos=false;
    this.http.get("https://portafolio-15e59.firebaseio.com/productos_idx.json").subscribe(res=>{
      this.cargandoproductos=true;
      this.productos=res.json();
    });
  }
}
