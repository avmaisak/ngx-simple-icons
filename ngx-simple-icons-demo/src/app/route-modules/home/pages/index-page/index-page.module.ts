import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSimpleIconsModule, activision, adobexd } from 'ngx-simple-icons';

import { IndexPageRoutingModule } from './index-page-routing.module';
import { IndexPageComponent } from './index-page.component';


@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    IndexPageRoutingModule,
    NgxSimpleIconsModule.pick({ activision, adobexd })
  ]
})
export class IndexPageModule { }
