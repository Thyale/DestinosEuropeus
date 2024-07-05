import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreNosComponent } from './components/sobre/sobre-nos/sobre-nos.component';
import { NossaMissaoComponent } from './components/sobre/nossa-missao/nossa-missao.component';
import { NossoTimeComponent } from './components/sobre/nosso-time/nosso-time.component';
import { PacotesComponent } from './components/visitas/pacotes/pacotes.component';
import { GaleriaComponent } from './components/visitas/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    VisitasComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    SobreNosComponent,
    NossaMissaoComponent,
    NossoTimeComponent,
    PacotesComponent,
    GaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
