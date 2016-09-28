import { Component, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function passwordMatcher(c: AbstractControl) {
  if (!c.get('password') || !c.get('confirm')) return null;
  return c.get('password').value === c.get('confirm').value
    ? null : {'nomatch': true};
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
  ]
})
export class PasswordMatcher {

}

@Component({
  selector: 'forms-comp',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  name = {first: 'Nancy', last: 'Drew'};
}
