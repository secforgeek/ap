import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'tabspage',
  templateUrl: 'tabspage.html',
})
export class Tabspage {

  tab1Root: any = HomePage;
  tab2Root: any = SettingsPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
