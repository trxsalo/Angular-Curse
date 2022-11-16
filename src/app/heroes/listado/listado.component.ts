import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {

  heroes:string[] = ['Bat','Car','Sal','marcos','juliana','heidy','salome'];

  borradoList:string[] = []

  borrarListado(){
    
    const borrado = this.heroes.shift() || ''; //retira el primer elemto de un aaray y lo asigna
    
    this.borradoList.unshift(borrado);

  }

}
