import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  private apiUrl: string = environment.baseUrl + '202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) {}

  // Function that allows to obtain list of plants from the API
  getPlants(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
