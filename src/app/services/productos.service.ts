import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductosService {
  productos:any[]=[];
  productosfiltrado:any[]=[];
  cargandoproductos:boolean=false;
  constructor(private http:Http) {
    this.cargarProductos();
  }
  public buscarProducto(termino:string){
    if(this.productos.length===0){
      this.cargarProductos().then(()=>{
        this.filtrarProducto(termino);
      });
    }
    else{
      this.filtrarProducto(termino);
    }
  }
  public filtrarProducto(termino:string){
    termino.toUpperCase();
    this.productosfiltrado=[];
    this.productos.forEach(prod=>{
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.indexOf(termino)==0){
        this.productosfiltrado.push(prod);
      }
    });
  }

  public cargarProducto(cod:string){
    return this.http.get("https://portafolio-15e59.firebaseio.com/productos/"+cod+".json");
  }

  public cargarProductos(){
   let promesa=new Promise((resolve,reject)=>{
     this.cargandoproductos=false;
     this.http.get("https://portafolio-15e59.firebaseio.com/productos_idx.json").subscribe(res=>{
       this.cargandoproductos=true;
       this.productos=res.json();
       resolve();
     });
   });
   return promesa;
  }
}
