import {AngularJSModule} from '../appjs.module';
import {Direct} from 'protractor/built/driverProviders';
import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

AngularJSModule.component('messages', {
  bindings: {
    messages: '<'
  },
  templateUrl: '/messages.component.html',
  controller: [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {
      const ctrl = this;

      ctrl.$onInit = function () {
        console.log('messages -> messages', ctrl.messages);
      };
      ctrl.$onChanges = function (changesObj) {
      };
      ctrl.$doCheck = function () {
      };
      ctrl.$onDestroy = function () {
      };
      ctrl.$postLink = function () {
      };

    }
  ]
});

@Directive({
  selector: 'messages'
})
export class MessagesComponentDirective extends UpgradeComponent {

  @Input() messages;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('messages', elementRef, injector);
  }
}

