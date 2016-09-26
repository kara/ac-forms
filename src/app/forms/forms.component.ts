import { Component, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Component({
  selector: 'forms-comp',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  states = [
    'AZ',
    'CA',
    'NY'
  ];

}