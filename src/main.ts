import 'zone.js';
import {enableProdMode, NgZone} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {UIRouter, UrlService} from '@uirouter/core';
import {visualizer} from '@uirouter/visualizer';
import {AngularJSModule} from './app/appjs.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(platformRef => {
    // Intialize the Angular Module
    // get() the UIRouter instance from DI to initialize the router
    const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

    // Instruct UIRouter to listen to URL changes
    function startUIRouter() {
      urlService.listen();
      urlService.sync();
    }

    platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
  });


