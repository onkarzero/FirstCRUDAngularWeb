import { Component } from '@angular/core';
import { Jugador } from './models/jugador'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-crud-web-app';
  headerTitle = 'Welcome to my first Angular CRUD web app';
  
  jugadorArray: Jugador[] = [
    {
      id: 1,
      nombre: "Kobe",
      equipo: "Los Lakers"
    },
    {
      id: 2,
      nombre: "Garnett",
      equipo: "Boston Celtics"
    },
    {
      id: 3,
      nombre: "Scottie",
      equipo: "Chicago Bulls"
    }
  ];
  jugadorSeleccionado: Jugador = new Jugador();
  
  agregarEditar() {
    this.jugadorSeleccionado.id = this.jugadorArray.length + 1;    
    this.jugadorArray.push(this.jugadorSeleccionado);
  }
}
