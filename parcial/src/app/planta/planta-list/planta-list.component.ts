import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css'],
})
export class PlantaListComponent implements OnInit {
  plantas: Array<Planta> = [];
  sumInterior: number = 0;
  sumExterior: number = 0;
  constructor(private plantaService: PlantaService) {}

  getPlants(): void {
    this.plantaService.getPlants().subscribe((plantas) => {
      this.plantas = plantas;
      this.getCountPlants(plantas);
    });
  }


  getCountPlants(plantas: Array<Planta>): void {
    this.sumInterior = plantas.filter(x =>  x.tipo == 'Interior').length;
    this.sumExterior = plantas.filter(x =>  x.tipo == 'Exterior').length;
  }


  ngOnInit() {
    this.getPlants();
  }
}
