import {UIRouter} from "ui-router-ng2";
import {INITIAL_STATES} from "./states";
import {Injectable, Injector} from "@angular/core";

/**
 * Create your own UIRouterConfig class
 *
 * This class should be added to the Angular 2 bootstrap() providers and is injected by the
 * UIRouter provider.  The UIRouter provider will then invoke this classes configure()
 * function and pass in the UIRouter instance, which we configure.  After configuration,
 * UIRouter syncs up with the current URL.
 */
@Injectable()
export class MyUIRouterConfig {
  constructor(private injector: Injector) {}

  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('app.dashboard', null, null));
    uiRouter.stateRegistry.root();
    INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));
  }
}
