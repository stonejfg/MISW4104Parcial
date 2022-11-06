import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlantaListComponent } from './planta-list/planta-list.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [PlantaListComponent],
  declarations: [PlantaListComponent]
})
export class PlantaModule { }
