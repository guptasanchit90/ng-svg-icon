/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgSvgIconModule, NgSvgIconService } from 'ng-svg-icon';

@Component({
  selector: 'app-component',
  template: `
  <ng-svg-icon name="amazon" [color]="color"></ng-svg-icon>

  <div *ngFor="let iconName of iconNames" >
  <ng-svg-icon [name]="iconName" [color]="color"></ng-svg-icon>
  {{iconName}}
  </div>`
})
class AppComponent {
  iconNames: string[];
  color = 'red';
  constructor(private ngSvgIconService: NgSvgIconService) {
    this.iconNames = Object.keys(ngSvgIconService.getShapes());
  }
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule,
    NgSvgIconModule.forRoot({
      defaultColor: '#000'
    })]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
