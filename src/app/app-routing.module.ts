import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaVendaComponent} from './tela-venda/tela-venda.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
 {path:'login', component:TelaLoginComponent},
 {path:'venda', component:TelaVendaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
