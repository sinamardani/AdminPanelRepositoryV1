import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { ViewsurveyComponent } from './viewsurvey/viewsurvey.component';

export const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
    children: [
      {
        path: 'viewsurvey',
        component: ViewsurveyComponent,
      },
    ],
  },
];
