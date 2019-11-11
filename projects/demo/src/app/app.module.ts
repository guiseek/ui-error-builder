import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiErrorBuilderModule } from '@guiseek/ui-error-builder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UiErrorBuilderModule.forRoot({
      validateUrl: (error) => {
        console.log(error);
        return `URL inválida`;
      },
      alreadyInUse: (error) => {
        console.log(error);
        return `O domínio ${error.value} já existe`;
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
