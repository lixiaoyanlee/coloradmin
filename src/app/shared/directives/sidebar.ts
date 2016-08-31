import {Component} from '@angular/core';
import {UIRouter, UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'pj-sidebar',
  template: require('./sidebar.html'),
  directives: [UIROUTER_DIRECTIVES]
  })
export class SidebarComponent {
    states = [];
    stateService;

  constructor(uiRouter: UIRouter) {
    this.stateService = uiRouter.stateService;
    this.states = this.processSidebarNavRoutes(uiRouter.stateRegistry.get());
  }

  processSidebarNavRoutes(states) {
    states.splice(0,2);
    var _states = states;
    _states = _states.map(state => {
      if(state.parent) {
        var parentState = _states.filter(s => {
          return s.name === state.parent;
        });
        parentState[0].submenu = parentState[0].submenu ? parentState[0].submenu : [];
        parentState[0].submenu.push(state);
        return;
      }
      return state;
    }).filter( s => { return s != undefined });
      
    return _states;
  }
}
