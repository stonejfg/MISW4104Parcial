import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantaComponent } from './planta/planta.component';

@NgModule({
  declarations: [	
    AppComponent,
      PlantaComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
