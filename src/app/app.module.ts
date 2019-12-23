import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'; //rootComponent

//metadata - decorator - infomrações adicionais
@NgModule({
  declarations: [ //componentes do modulo
    AppComponent //rootComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [], //serviços
  bootstrap: [AppComponent] //qual componente vai ser inicializado
})
export class AppModule { }
