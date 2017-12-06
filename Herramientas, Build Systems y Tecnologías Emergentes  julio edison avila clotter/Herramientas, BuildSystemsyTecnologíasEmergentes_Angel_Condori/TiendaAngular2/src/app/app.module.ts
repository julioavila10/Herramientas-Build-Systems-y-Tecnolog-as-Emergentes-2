import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

import {DataTableModule} from "angular2-datatable";

import {ReactiveFormsModule} from '@angular/forms';
import {CatalogoComponent,SearchPipe} from './catalogo/catalogo.component';

import {CatalogoService} from './catalogo.service';

import {DataService} from './data.service';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { MenuComponent } from './menu/menu.component';
import { ItemcarComponent } from './itemcar/itemcar.component';
import { ItemcarService } from './itemcar.service';
import { DataitemcarService} from './dataitemcar.service';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    SingupComponent,
    CatalogoComponent,
    SearchPipe,
    DescripcionComponent,
    MenuComponent,
    ItemcarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthGuard, AuthService, CatalogoService, DataService, ItemcarService, DataitemcarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
