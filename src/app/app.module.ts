import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatosComponent } from './datos.component';
import { FechaComponent } from './fecha/fecha/fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FechaComponent]
})
export class AppModule { }
