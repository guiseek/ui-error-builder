import { NgModule } from '@angular/core';
import { ErrorBuilderDirective } from './error-builder.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ErrorBuilderDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ErrorBuilderDirective]
})
export class UiErrorBuilderModule { }
