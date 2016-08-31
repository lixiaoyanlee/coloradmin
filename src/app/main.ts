import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {HeaderComponent} from './shared/directives/header';
import {SidebarComponent} from './shared/directives/sidebar';

@Component({
  selector: 'app',
  template: require('./main.html'),
  directives: [UIROUTER_DIRECTIVES, HeaderComponent, SidebarComponent]
})
export class MainComponent {}
