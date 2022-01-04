import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSimpleIconsComponent } from './components/ngx-simple-icons.component';
import { IconsProvider } from "./icon.provider";

@NgModule({
  declarations: [ NgxSimpleIconsComponent ],
  imports: [ CommonModule ],
  exports: [ NgxSimpleIconsComponent ]
})
export class NgxSimpleIconsModule {
  public static pick(icons: { [key: string]: string }): ModuleWithProviders<NgxSimpleIconsModule> {
    return {
      ngModule: NgxSimpleIconsModule,
      providers: [
        {provide: IconsProvider, multi: true, useValue: icons},
      ],
    };
  }
}
