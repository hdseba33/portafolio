import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class InformacionService {
 info:any={};
 equipo:any[]=[];
 cargado:boolean=false;
 cargadosobrenosotros:boolean=false;
  constructor(public http:Http) {
    this.cargaDatos();
    this.cargaSobreNosotros();
  }

  public cargaDatos(){
    this.http.get("assets/data/info.pagina.json").subscribe(
      data=>{
        this.cargado=true;
        this.info=data.json();
      }
    );
  }

  public cargaSobreNosotros(){
    this.http.get("https://portafolio-15e59.firebaseio.com/equipo.json").subscribe(
      data=>{
        this.cargadosobrenosotros=true;
        this.equipo=data.json();
      }
    );
  }
}
