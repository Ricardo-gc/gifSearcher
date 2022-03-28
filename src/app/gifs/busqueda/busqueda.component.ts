import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild('txtBuscar',{static: true}) txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private GifsService: GifsService){ }
  buscar(){
    const texto = this.txtBuscar.nativeElement.value;
    if (texto.length === 0) return;
    this.GifsService.buscarGifs(texto);
    this.txtBuscar.nativeElement.value = ''
    
  }
}
