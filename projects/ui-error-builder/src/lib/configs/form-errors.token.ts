import { InjectionToken } from '@angular/core';
import { FORM_ERRORS_CONFIG } from './form-errors.config';

export const FORM_ERRORS_CONFIG_TOKEN = 'FormErrors';

export const FORM_ERRORS = new InjectionToken(FORM_ERRORS_CONFIG_TOKEN, {
  providedIn: 'root',
  factory: () => FORM_ERRORS_CONFIG
});
