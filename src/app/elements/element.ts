import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  selector: 'pj-ui-element-container',
  template: require('./element.html'),
  directives: [UIROUTER_DIRECTIVES]
  })
export class UiElementComponent {}
