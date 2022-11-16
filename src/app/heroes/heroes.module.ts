import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [ListadoComponent,HeroesComponent], //que componentes seran publicos

    declarations: [
        HeroesComponent,
        ListadoComponent],
    providers: [],
})
export class HeroesModule { }
