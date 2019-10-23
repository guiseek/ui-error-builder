import { Directive, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorMessages } from './interfaces/error-messages.interface';
import { Subscription, merge } from 'rxjs';
import { FORM_ERRORS } from './configs/form-errors.token';

@Directive({
  selector: '[uiErrorBuilder], formControlName, ngModel, [ngModel], [formControlName], [formControl]',
  exportAs: 'errorBuilder'
})
export class ErrorBuilderDirective implements OnInit, OnDestroy {
  @Input() messages: ErrorMessages = {};

  public message: string;

  private sub: Subscription;

  constructor(
    @Inject(FORM_ERRORS) private errors,
    private controlDir: NgControl
  ) { }

  get control() {
    return this.controlDir.control;
  }

  ngOnInit() {
    this.sub = merge(
      this.control.valueChanges
    ).subscribe((v) => {
      const controlErrors = this.control.errors;
      if (controlErrors) {
        this.message = this.getError(this.control.errors);
      }
    });
  }
  getError(errors) {
    if (!errors) {
      return;
    }
    const key = Object.keys(errors)[0];

    if (this.hasInMessages(key)) {
      return this.messages[key];
    }
    if (this.isDefaultMessage(key)) {
      return this.errors[key](errors[key]);
    } else {
      return 'Erro desconhecido';
    }
  }
  isDefaultMessage(key) {
    return Object.keys(this.errors).includes(key);
  }
  hasInMessages(key) {
    if (!!!this.messages) {
      return false;
    }
    return !!this.messages[key];
  }
  ngOnDestroy() {
    return this.sub && this.sub.unsubscribe();
  }
}
