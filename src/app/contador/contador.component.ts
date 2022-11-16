import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template:`
        <div>
        <h1>
        SALO
        </h1>
        <button (click)="cambio(+5)"> {{base}} </button>

        <span>{{numero}}</span>

        <button (click)="cambio(-5)">- {{base}} </button>

        </div>

       
    
    `,
    styleUrls:['./contador.component.scss']
})

export class ContadorCompoment {
    public base = 5;
    public numero = 0;

    cambio(base:number){

        this.numero += base;
    }
}