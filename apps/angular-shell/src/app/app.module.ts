import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { startsWith } from './router-utils';
import { WrapperComponent } from './wrapper.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          matcher: startsWith('angular-app'),
          component: WrapperComponent,
          data: {
            importName: 'angular-app',
            elementName: 'angular-app-root',
          },
        },
        {
          matcher: startsWith('react-app'),
          component: WrapperComponent,
          data: {
            importName: 'react-app',
            elementName: 'react-app-root',
          },
        },
        {
          path: '',
          component: HomeComponent,
        },
        // {
        //   path: 'multiple',
        //   component: MultipleAppsComponent,
        // },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}