import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
    selector: 'pj-table-container',
    template: require('./table.html'),
    directives: [UIROUTER_DIRECTIVES]
})
export class TableComponent {}
