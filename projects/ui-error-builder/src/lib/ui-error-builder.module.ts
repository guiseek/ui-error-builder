import { NgModule, ModuleWithProviders } from '@angular/core';
import { ErrorBuilderDirective } from './error-builder.directive';
import { FORM_ERRORS_CONFIG_TOKEN, FORM_ERRORS } from './configs/form-errors.token';
import { FormErrors } from './interfaces/form-errors.interface';



@NgModule({
  declarations: [ErrorBuilderDirective],
  imports: [
  ],
  exports: [ErrorBuilderDirective]
})
export class UiErrorBuilderModule {
  static forRoot(errorsConfig: FormErrors): ModuleWithProviders {
    return {
      ngModule: UiErrorBuilderModule,
      providers: [{
        provide: FORM_ERRORS_CONFIG_TOKEN,
        useValue: { ...FORM_ERRORS, ...errorsConfig }
      }]
    };
  }
}
