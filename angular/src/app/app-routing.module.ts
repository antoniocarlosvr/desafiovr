import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { LojaComponent } from './loja/loja.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutolojaComponent } from './produtoloja/produtoloja.component';


const routes : Routes = [
  {path : 'loja', component: LojaComponent},
  {path : '', component: HomeComponent},
  {path : 'produto', component: ProdutoComponent},
  {path : 'produtoloja', component: ProdutolojaComponent},
  {path: '', redirectTo: '/', pathMatch:'full'}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
