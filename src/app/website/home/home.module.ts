import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
//from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SliderComponent, LayoutComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule { }
