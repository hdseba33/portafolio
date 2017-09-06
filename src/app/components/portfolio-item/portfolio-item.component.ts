import { Component} from '@angular/core';
import {ProductosService} from '../../services/productos.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {
   producto:any;
   cod:string;
  constructor(private route:ActivatedRoute, private ps:ProductosService) {
    route.params.subscribe(parametros=>{
      this.cod=parametros['id'];
      ps.cargarProducto(this.cod).subscribe(res=>{
        this.producto=res.json();
      });
    });
  }

}
