import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContadorCompoment } from './contador.component';

@NgModule({
    imports: [CommonModule],
    exports: [ContadorCompoment],
    declarations: [ContadorCompoment],
    providers: [],
})
export class ContadorModule { }
