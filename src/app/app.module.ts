import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpfComponent } from './components/cpf/cpf.component';
import { PassoAPassoComponent } from './components/passo-a-passo/passo-a-passo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsComponent } from './components/cards/cards.component';
import { DigitoPipe } from './pipes/digito.pipe';
import { HomeComponent } from './pages/home/home.component';
import { CpfValidoComponent } from './pages/cpf-valido/cpf-valido.component';
import { BotoesComponent } from './components/botoes/botoes.component';



@NgModule({
  declarations: [
    AppComponent,
    CpfComponent,
    PassoAPassoComponent,
    CardsComponent,
    DigitoPipe,
    HomeComponent,
    CpfValidoComponent,
    BotoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {}
