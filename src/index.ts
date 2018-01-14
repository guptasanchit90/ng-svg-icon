import { NgSvgConfig } from './ngSvgIcon.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSvgIconComponent } from './ngSvgIcon.component';
import { NgSvgIconService } from './ngSvgIcon.service';

export * from './ngSvgIcon.component';
export * from './ngSvgIcon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgSvgIconComponent,
  ],
  exports: [
    NgSvgIconComponent,
  ]
})
export class NgSvgIconModule {
  static forRoot(ngSvgConfig?: NgSvgConfig): ModuleWithProviders {
    return {
      ngModule: NgSvgIconModule,
      providers: [NgSvgIconService, { provide: 'NgSvgConfig', useValue: ngSvgConfig }]
    };
  }
}
