import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root' //Angular lo eleva a un nivel global de la app
})
export class GifsService {
  private apiKey: string = 'VBpfuwzwhxnCZPZPCajEquHTDnE7YjeS';
  private serviceURL: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  //TODO: Cambiar el ANY
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }
  constructor ( private http: HttpClient ){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    //if (localStorage.getItem('historial'))
  }

  buscarGifs(busqueda:string){
    busqueda = busqueda.trim().toLocaleLowerCase();
    if (!this._historial.includes(busqueda)){
      this._historial.unshift(busqueda);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', busqueda);

    this.http.get<SearchGifsResponse>(`${this.serviceURL}/search`, {params})
        .subscribe((resp ) => {
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        })
  }
}
