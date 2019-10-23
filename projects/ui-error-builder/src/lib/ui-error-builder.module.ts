import { NgModule } from '@angular/core';
import { UiErrorBuilderComponent } from './ui-error-builder.component';
import { ErrorBuilderDirective } from './error-builder.directive';



@NgModule({
  declarations: [UiErrorBuilderComponent, ErrorBuilderDirective],
  imports: [
  ],
  exports: [UiErrorBuilderComponent, ErrorBuilderDirective]
})
export class UiErrorBuilderModule { }
