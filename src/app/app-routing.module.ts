import { AppComponent } from './app.component';
import { CpfValidoComponent } from './pages/cpf-valido/cpf-valido.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotoesComponent } from './components/botoes/botoes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admissao/:cpf', component: CpfValidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
