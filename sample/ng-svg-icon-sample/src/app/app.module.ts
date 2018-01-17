import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgSvgIconModule } from 'ng-svg-icon';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ClipboardModule,
    NgSvgIconModule.forRoot({
      defaultColor: '#000',
      defaultSize: 50,
      defaultViewBox: '0 0 24 24'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
