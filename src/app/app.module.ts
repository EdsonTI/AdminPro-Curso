import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas
import { APP_ROUTES } from './app.Routes';
// Modulos
import { PagesModule } from './pages/pages.module';


// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// temporal
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';


// servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES, // modulo de rutas de las paginas
    PagesModule, // modulo de paginas web
    ServiceModule, // modulo de servicios
    FormsModule // temporal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
