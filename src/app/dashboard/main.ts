import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'pj-dashboard-main',
  template: require('./main.html'),
  directives: [UIROUTER_DIRECTIVES]
})
export class DashboardMainComponent {}
