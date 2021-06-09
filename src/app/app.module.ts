import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiteComponent } from './white/white.component';



@NgModule({ 
  declarations: [
    AppComponent,
    WhiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
