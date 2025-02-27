import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista Empleados';

  empleados:Empleado[]=[
    new Empleado("Martín", "Sánchez", "Presidente", 7500),
    new Empleado("Iker", "Perez", "Presidente", 2500),
    new Empleado("Daniel", "Gonzalez", "Presidente", 3500),
    new Empleado("Luismiguel", "Benitez", "Presidente", 2500),
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadtroSalario);
    this.empleados.push(miEmpleado)
  }

  cuadroNombre:String =""
  cuadroApellido:String=""
  cuadroCargo:String=""
  cuadtroSalario:number= 0
}
