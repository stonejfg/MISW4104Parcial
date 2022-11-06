/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantaListComponent } from './planta-list.component';
import { faker } from "@faker-js/faker";
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    component.plantas = []
    for (let index = 0; index < random(3,10); index++) {
      component.plantas.push(new Planta(index, faker.seed.name, faker.seed.name,
        faker.seed.length, faker.seed.prototype, faker.lorem.word(1), faker.lorem.word(1)));
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Crear 3 plantas ',()=>{
    component.plantas = []
    for (let index = 0; index < 3; index++) {
      component.plantas.push(new Planta(index, faker.seed.name, faker.seed.name,
        faker.seed.length, faker.seed.prototype, faker.lorem.word(1), faker.lorem.word(1)));
    }
    expect(component.plantas.length).toEqual(3);
    });


  /*it('Should be exists the title of the application = Vivero las Plantas', () => {
    let title = 'Vivero las Plantas';
    let applicationTitleObtained = debug.query(By.css('h2#main-title'));
    expect(applicationTitleObtained.nativeElement.textContent.trim()).toBe(title);
  });*/



  /*it("Should return a list of plants", () => {
    debug.queryAll(By.css('td#planta-nombre-comun')).forEach((td, i) => {
      expect(td.nativeElement.textContent).toContain(component.plantas[i].nombre_comun)
    });
  });*/
});

function random(valMin: number, valMax: number) {
  return Math.floor(Math.random() * (valMax - valMin + 1)) + valMin;
}


