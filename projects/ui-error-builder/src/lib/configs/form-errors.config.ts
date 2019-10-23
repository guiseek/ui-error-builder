import { FormErrors } from '../interfaces/form-errors.interface';

export const FORM_ERRORS_CONFIG: FormErrors = {
  required: error => `Este campo é obrigatório`,
  email: error => `Email inválido`,
  min: ({ min, actual }) => `O mínimo é ${min} e tem ${actual}`,
  max: ({ max, actual }) => `O máximo é ${max} e tem ${actual}`,
  minlength: ({ requiredLength, actualLength }) =>
    `O mínimo é ${requiredLength} e tem ${actualLength}`,
  maxlength: ({ requiredLength, actualLength }) =>
    `O máximo é ${requiredLength} e tem ${actualLength}`,
  pattern: ({ requiredPattern, actualValue }) =>
    `Esperado ${requiredPattern} e tem ${actualValue}`,
};
