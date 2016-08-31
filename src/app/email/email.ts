import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'pj-email-container',
  template: require('./email.html'),
  directives: [UIROUTER_DIRECTIVES]
})
export class EmailComponent {}
