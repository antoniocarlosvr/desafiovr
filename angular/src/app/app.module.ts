import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutolojaComponent } from './produtoloja/produtoloja.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProdutoComponent,
    ProdutolojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
