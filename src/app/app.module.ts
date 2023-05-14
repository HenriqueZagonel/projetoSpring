import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaVendaComponent } from './tela-venda/tela-venda.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaVendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'login', component: TelaLoginComponent },
      {path:'tela-venda', component: TelaVendaComponent },
    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
