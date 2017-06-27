import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxContentEditableModule } from 'ngx-contenteditable';
import { TooltipModule } from 'ngx-bootstrap';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxContentEditableModule, TooltipModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
