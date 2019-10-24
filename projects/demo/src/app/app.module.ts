import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { UiErrorBuilderModule } from '@guiseek/ui-error-builder';
import { UiErrorBuilderModule } from 'ui-error-builder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UiErrorBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
