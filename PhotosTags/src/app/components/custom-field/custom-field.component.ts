import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldValidatorService } from 'src/app/services/field-validator.service';

@Component({
  selector: 'app-custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.css'],
})
export class CustomFieldComponent {
  @Input() fieldText: string;
  @Input() fieldName: string;
  @Input() formGroup: FormGroup;
  

  @Input() disabled: boolean;

  @Input() hasIcon: boolean;
  @Input() icon?: string;
  @Input() type?: string = 'text';
  @Input() className?: string;

  @Output() focus: EventEmitter<any> = new EventEmitter();

  constructor(public validator: FieldValidatorService) {}

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.fieldName];
  }
}
