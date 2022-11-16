import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {ContadorCompoment} from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    ContadorCompoment,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule //utilizamos otros modules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
