import { Component, HostListener } from '@angular/core';
import { detect } from 'detect-browser';

export interface Browser {
  name: string;
  os: string;
  type: string;
  version: string;
}
declare global {
  interface Window {
    browser: Browser;
    platform: any;
  }
}
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ng-conf-demo-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-host';
  user = '';
  @HostListener('document:user-selected', ['$event.detail'])
  changeUser(user: string): void {
    console.log(user);
    this.user = user;
  }

  constructor(){
    window.browser = detect() as Browser;
  }
}