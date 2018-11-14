import { Component } from '@angular/core'
//decoradores en angular que preceden a clases
@Component({
  selector: "app-datos",
  templateUrl: "./datos.component.html",
  styleUrls: ["./datos.component.css"]
})

export class DatosComponent {
  titulo: string = "La fecha de hoy es:";
}
