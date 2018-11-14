import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {upgradeModule} from '@uirouter/angular-hybrid';

import {downgradeComponent} from '@angular/upgrade/static';
import {MessageComponent} from './ng2/message/message.component';
import {AppComponent} from './app.component';
import {UIRouter, UrlService} from '@uirouter/core';
import {visualizer} from '@uirouter/visualizer';

import {InboxComponent} from './ng2/inbox/inbox.component';
import {MessagesComponentDirective} from './ng1/messages.component';
import {OutboxComponent} from './ng2/outbox/outbox.component';

export const AngularJSModule = angular.module('CBApp', [uiRouter, upgradeModule.name]);

export const inboxState = {
  name: 'inbox',
  url: '/inbox',
  component: InboxComponent
};

export const outboxState = {
  name: 'outbox',
  url: '/outbox',
  component: OutboxComponent
};

export const messagesState = {
  name: 'messages',
  url: '/messages',
  component: 'messages'
};

export const messageState = {
  name: 'message',
  url: '/message',
  component: 'message'
};

AngularJSModule
  .directive('message', downgradeComponent({component: MessageComponent}))
  .directive('appRoot', downgradeComponent({component: AppComponent}))
;


AngularJSModule.config([
  '$urlServiceProvider', '$locationProvider', '$stateProvider',
  ($urlService: UrlService, $locationProvider, $stateProvider) => {

    $locationProvider.html5Mode(true);

    $stateProvider.state(inboxState);
    $stateProvider.state(outboxState);
    $stateProvider.state(messagesState);
    $stateProvider.state(messageState);

    $urlService.deferIntercept();
  }]);

AngularJSModule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter)]);
