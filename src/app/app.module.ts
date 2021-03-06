/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See LICENSE and CREDITS in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from './@core/core.module'

import { AppComponent } from './app.component'
import { AgmCoreModule } from '@agm/core'
import { AppRoutingModule } from './app-routing.module'
import { ThemeModule } from './@theme/theme.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule } from 'ngx-toastr'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
         apiKey: 'AIzaSyA77V7bNjGDIIFvTWghwl1BhQro1I2zv_w'
    }),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
