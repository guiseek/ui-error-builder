export interface FormErrors {
  required: (error: any) => string;
  email: (error: any) => string;
  min: ({ min, actual }: {
    min: any;
    actual: any;
  }) => string;
  max: ({ max, actual }: {
    max: any;
    actual: any;
  }) => string;
  minlength: ({ requiredLength, actualLength }: {
    requiredLength: any;
    actualLength: any;
  }) => string;
  maxlength: ({ requiredLength, actualLength }) => string;
  pattern: ({ requiredPattern, actualValue }) => string;
  [k: string]: any;
}
