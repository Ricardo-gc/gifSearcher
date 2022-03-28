import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild('txtBuscar',{static: true}) txtBuscar!:ElementRef<HTMLInputElement>;

  buscar(){
    const texto = this.txtBuscar.nativeElement.value;
    console.log(texto);
    this.txtBuscar.nativeElement.value = ''
    
  }
}
