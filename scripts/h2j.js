String.prototype.toHtmlEntities = function() {
  return this.replace(/./gm, function(s) {
    return "&#" + s.charCodeAt(0) + ";";
  });
};


/**
 * Create string from HTML entities
 */

String.fromHtmlEntities = function(string) {
  return (string + "").replace(/&#\d+;/gm, function(s) {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};

const s = `
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

const domains = ['google.com'];


const URL_REGEXP = /^(http?|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|web|app|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

function validateUrl(c: FormControl) {
  return URL_REGEXP.test(c.value) ? null : {
    validateUrl: {
      valid: false
    }
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@guiseek/ui-error-builder';
  form: FormGroup;

  commonForm: FormGroup;
  extraForm: FormGroup;

  messages = {
    validateUrl: 'URL inválida'
  };

  checkingDomain = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]],
      age: ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(100)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      pattern: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]]
    });
    this.extraForm = this.fb.group({
      domain: ['', [
        Validators.required
      ], [this.alreadyDomain]],
      url: ['', [
        Validators.required,
        validateUrl
      ]],
      email: ['', [
        Validators.email,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]]
    });
  }

  alreadyDomain = (control: FormControl) => {

    return timer(400).pipe(
      switchMap(async () => {
        this.checkingDomain = true;
        return new Promise((resolve, reject) => {
          window.setTimeout(() => {
            const exists = !!domains.includes(control.value);
            if (exists) {
              resolve({
                alreadyInUse: {
                  value: control.value
                }
              });
            } else {
              resolve(null);
            }
          }, 400);
        });
      }),
      tap(() => {
        this.checkingDomain = false;
      })
    );
  }
}`;


console.log(s.toHtmlEntities());
