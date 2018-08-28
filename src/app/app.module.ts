import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardPage } from "../pages/card/card";

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionsheetPage } from "../pages/actionsheet/actionsheet";
import { AlertPage } from "../pages/alert/alert";
import { BadgePage } from "../pages/badge/badge";
import { ButtonPage } from "../pages/button/button";
import { ComponentButtonsPage } from "../pages/component-buttons/component-buttons";
import { CheckBoxPage } from "../pages/check-box/check-box";
import { DateTimePage } from "../pages/date-time/date-time";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionsheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    ComponentButtonsPage,
    CardPage,
    CheckBoxPage,
    DateTimePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionsheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    ComponentButtonsPage,
    CardPage,
    CheckBoxPage,
    DateTimePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
