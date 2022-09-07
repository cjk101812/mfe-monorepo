import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

import { RemoteEntryComponent } from './entry.component';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'angular-app',
        component: HomeComponent,
      }
    ])
  ],
  providers: [],
})
export class RemoteEntryModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const webComponent = createCustomElement(RemoteEntryComponent, {
      injector: this.injector,
    });
    customElements.define('angular-app-root', webComponent);
  }
}
