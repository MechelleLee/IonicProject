import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { ActionsheetPage } from "../pages/actionsheet/actionsheet";
import { AlertPage } from "../pages/alert/alert";
import { BadgePage } from "../pages/badge/badge";
import { ButtonPage } from "../pages/button/button";
import { ComponentButtonsPage } from "../pages/component-buttons/component-buttons";
import { CardPage } from "../pages/card/card";
import { CheckBoxPage } from "../pages/check-box/check-box";
import { DateTimePage } from "../pages/date-time/date-time";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Action Sheets', component: ActionsheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Badge', component: BadgePage },
      { title: 'Buttons', component: ButtonPage },
      { title: 'Component Buttons', component: ComponentButtonsPage },
      { title: 'Cards', component: CardPage },
      { title: 'Check Box', component: CheckBoxPage },
      { title: 'Date Time', component: DateTimePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    console.log(this.pages)
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
