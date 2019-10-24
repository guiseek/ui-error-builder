import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]],
      age: ['', [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]],
      email: ['', [
        Validators.email,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]]
    });
  }
}
