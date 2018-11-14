import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';

import {AngularJSModule, inboxState} from './appjs.module';
import {InboxComponent} from './ng2/inbox/inbox.component';
import {MessagesComponentDirective} from './ng1/messages.component';
import {MessageComponent} from './ng2/message/message.component';

import * as angular from 'angular';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {UIRouterModule} from '@uirouter/angular';
import {OutboxComponent} from './ng2/outbox/outbox.component';


const ng1States = [];

@NgModule({
  declarations: [ // import components
    AppComponent,
    InboxComponent,
    MessagesComponentDirective,
    MessageComponent,
    OutboxComponent
  ],
  imports: [ // import modules
    BrowserModule,
    UpgradeModule,
    UIRouterModule.forChild({states: ng1States}),
    UIRouterUpgradeModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [ // downgraded components
    InboxComponent,
    MessageComponent,
    AppComponent,
    OutboxComponent
  ]
})
export class AppModule {

  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, [AngularJSModule.name], {strictDi: true});
  }
}
