import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
    selector: 'pj-form-container',
    template: require('./form.html'),
    directives: [UIROUTER_DIRECTIVES]
    })
export class FormComponent {}
