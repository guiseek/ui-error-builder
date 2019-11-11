import { NgModule, ModuleWithProviders } from '@angular/core';
import { ErrorBuilderDirective } from './error-builder.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormErrors } from './interfaces';
import { FORM_ERRORS, FORM_ERRORS_CONFIG } from './configs';



@NgModule({
  declarations: [ErrorBuilderDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ErrorBuilderDirective]
})
export class UiErrorBuilderModule {
  static forRoot(config: Partial<FormErrors>): ModuleWithProviders {
    return {
      ngModule: UiErrorBuilderModule,
      providers: [
        {
          provide: FORM_ERRORS,
          useValue: {
            ...FORM_ERRORS_CONFIG,
            ...config
          }
        }
      ]
    };
  }
}

