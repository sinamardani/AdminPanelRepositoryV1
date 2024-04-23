import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  FormControl,
} from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbStepperModule,
} from '@nebular/theme';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';

interface ControlModel {
  kind: 'input' | 'other';
  type:
    | 'text'
    | 'tel'
    | 'number'
    | 'email'
    | 'select'
    | 'multiSelect'
    | 'radio'
    | 'checkbox'
    | 'date'
    | 'time';
  label: string;
  placeHolder?: string;
  value: any;
  options?: string[];
  validations: ValidationObj[];
}

interface SurveyLevelModel {
  levelLabel?: string;
  levelFormData: ControlModel[];
}

interface ValidationDataObj {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

interface ValidationObj {
  validator: string;
  patternType?: string;
  validationData?: ValidationDataObj;
  message?: string;
}

enum ErrorMessage {
  required = <any>'این‌فیلدالزامی میباشد!',
  email = <any>'ایمیل واردشده نامعتبر است!',
  pattern = <any>'موبایل وارد شده نامعتبر است',
}

@Component({
  selector: 'app-viewsurvey',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    // MatBadgeModule,
    // MatSidenavModule,
    // MatListModule,
    // MatCardModule,
    // MatSliderModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    // MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  templateUrl: './viewsurvey.component.html',
  styleUrl: './viewsurvey.component.scss',
})
export class ViewsurveyComponent {
  // title = 'نمایش فرم نظر سنجی';

  isLinear = true;
  form: FormGroup;
  formGroupData = {};

  formStructure: SurveyLevelModel[] = [
    {
      levelLabel: 'اطلاعات شخصی',
      levelFormData: [
        {
          kind: 'input',
          type: 'text',
          label: 'نام', //
          value: '', // مقدار پیشفرض
          validations: [
            //اعتبار سنجی های فرم
            {
              validator: 'required',
            },
          ],
        },
        {
          kind: 'other',
          type: 'select',
          label: 'select', //
          value: null, // مقدار پیشفرض
          options: ['Value 1', 'Value 2', 'Value 3'],
          validations: [
            {
              validator: 'required',
            },
          ],
        },
        {
          kind: 'other',
          type: 'multiSelect',
          label: 'multiSelect', //
          value: null, // مقدار پیشفرض
          options: [
            'Value 1',
            'Value 2',
            'Value 3',
            'Value 4',
            'Value 5',
            'Value 6',
          ],
          validations: [
            {
              validator: 'required',
            },
            {
              validator: 'minLength',
              validationData: {
                minLength: 2,
              },
            },
            {
              validator: 'maxLength',
              validationData: {
                maxLength: 3,
              },
            },
          ],
        },
        {
          kind: 'other',
          type: 'checkbox',
          label: 'checkbox', //
          value: null, // مقدار پیشفرض
          options: [
            'Value 1',
            'Value 2',
            'Value 3',
            'Value 4',
            'Value 5',
            'Value 6',
          ],
          validations: [
            {
              validator: 'required',
            },
          ],
        },
        {
          kind: 'other',
          type: 'radio',
          label: 'RadioButton', //
          value: null, // مقدار پیشفرض
          options: [
            'Value 1',
            'Value 2',
            'Value 3',
            'Value 4',
            'Value 5',
            'Value 6',
          ],
          validations: [],
        },
        {
          kind: 'input',
          type: 'text',
          label: 'خانوادگی', //
          value: '', // مقدار پیشفرض
          validations: [
            //اعتبار سنجی های فرم
            {
              validator: 'required',
            },
          ],
        },
        {
          kind: 'input',
          type: 'tel',
          label: 'شماره تماس', //
          value: '', // مقدار پیشفرض
          placeHolder: 'تلفن خود را بدون 0 واردنمایید',
          validations: [
            //اعتبار سنجی های فرم
            {
              validator: 'required',
            },
            {
              validator: 'minLength',
              validationData: {
                minLength: 3,
              },
            },
            {
              validator: 'maxLength',
              validationData: {
                maxLength: 10,
              },
            },
            {
              validator: 'pattern',
              validationData: {
                pattern: '^9[0|1|2|3][0-9]{8}$',
              },
            },
          ],
        },
      ],
    },
    {
      levelLabel: 'مرحله 2',
      levelFormData: [
        {
          kind: 'input',
          type: 'email',
          label: 'ایمیل', //
          value: '', // مقدار پیشفرض
          validations: [
            //اعتبار سنجی های فرم
            {
              validator: 'required',
            },
            {
              validator: 'email',
            },
          ],
        },
        {
          kind: 'input',
          type: 'number',
          label: 'سابقه کار', //
          value: null, // مقدار پیشفرض
          validations: [
            //اعتبار سنجی های فرم
            {
              validator: 'required',
            },
            {
              validator: 'min',
              validationData: {
                min: 9,
              },
            },
            {
              validator: 'max',
              validationData: {
                max: 20,
              },
            },
          ],
        },
      ],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.formStructure.forEach((level, Li) => {
      let formArrayData: any[] = [];
      level.levelFormData.forEach((control, Ci) => {
        console.log(`Ci${Ci} = >`, control);
        formArrayData.push([control.value]);
        let validations = [];
        control.validations.forEach((validation) => {
          validations.push(Validators[validation.validator]);
        });
        formArrayData[Ci][1] = validations;
      });
      this.formGroupData[`L${Li}`] = this.fb.array(formArrayData);
    });

    this.form = fb.group(this.formGroupData);
  }

  getFormControlName(Li: number, Ci: number): string {
    return `L${Li}C${Ci}`;
  }

  getLevel(Li: number) {
    return `L${Li}`;
  }

  getErrorMessage(Li: number, Ci: number, validations: ValidationObj[] = []) {
    const control = (<FormArray>this.form.get(`L${Li}`)).at(Ci);
    const errors = control.errors;
    let message: string = '';
    switch (Object.keys(errors || {})[0]) {
      case 'minlength':
        message = `تعداد کاراگتر ها نباید کمتر از  ${
          Object.values(errors)[0].requiredLength
        } باشد .`;
        break;
      case 'maxlength':
        message = `تعداد کاراگتر ها نباید بیشتر از  ${
          Object.values(errors)[0].requiredLength
        } باشد .`;
        break;
      default:
        message =
          Object.keys(ErrorMessage)[
            Object.values(ErrorMessage).indexOf(Object.keys(errors || {})[0])
          ];
        break;
    }
    return message;
  }
  getValidationData(validationData: ValidationObj[], key: string) {
    const validationDto = validationData.find((i) => i.validator === key);
    if (
      validationDto &&
      validationDto.validationData &&
      validationDto.validationData[key]
    ) {
      return validationDto.validationData[key];
    }
    return undefined;
  }
}
