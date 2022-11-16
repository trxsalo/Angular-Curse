import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls:['./heroes.component.scss']
})

export class HeroesComponent{
    nombre:string =  'salome';
    edad:number = 18;
    nacionalidad:string= 'Boliviano';

    obtenerNacionalidad():string{
        return `La nacionalidad de Marcos es ${this.nacionalidad}`;
    }

    nombreCompleto():string{
        return `${this.nombre}  -  ${this.edad}  -- ${this.nacionalidad}`;
    }
    get nameMayuscula():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'Marcos';
    }
    cambiarEdad():void{
        this.edad = 20;
    }

    cambiarNacionalidad():void{
        this.nacionalidad = 'Europeo'
    }
}