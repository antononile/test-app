 import { NgModule } from '@angular/core';
import{CUSTOM_ELEMENTS_SCHEMA} from'@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import bootstrap from '../main.server';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [FlexLayoutModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule , CommonModule, AppComponent, MatToolbarModule
  ],
  exports:[
    MatInputModule
  ],
  providers:[],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: []
})
export class AppModuleTsModule { }

