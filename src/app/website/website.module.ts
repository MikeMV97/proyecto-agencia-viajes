import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../material/material.module'; //from '@material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class WebsiteModule { }
