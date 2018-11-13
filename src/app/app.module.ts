import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';

import {AngularJSModule} from './appjs.module';
import {InboxComponent} from './ng2/inbox/inbox.component';
import {MessagesComponentDirective} from './ng1/messages.component';
import {MessageComponent} from './ng2/message/message.component';

import * as angular from 'angular';

@NgModule({
  declarations: [ // import components
    AppComponent,
    InboxComponent,
    MessagesComponentDirective,
    MessageComponent
  ],
  imports: [ // import modules
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [ // downgraded components
    MessageComponent,
    AppComponent]
})
export class AppModule {

  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, [AngularJSModule.name], {strictDi: true});
  }
}
