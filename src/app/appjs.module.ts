import * as angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {MessageComponent} from './ng2/message/message.component';
import {AppComponent} from './app.component';


export const AngularJSModule = angular.module('CBApp', []);


AngularJSModule
  .directive('message', downgradeComponent({component: MessageComponent}))
  .directive('appRoot', downgradeComponent({component: AppComponent}))
;
