import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "visitas", component: VisitasComponent},
  {path: "contato", component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
