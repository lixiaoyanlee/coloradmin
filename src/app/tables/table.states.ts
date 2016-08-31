import {Http} from "@angular/http";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
import {TableComponent} from "./table";
import {BasicTableComponent} from "./tablebasic";
import {ManagedTableComponent} from "./tablemanaged";

export let TABLE_STATES = [{
        name: 'app.table',
        title: 'Tables',
        component: TableComponent
    },
    {
        name: 'app.table.basic',
        url: '/basic',
        title: 'Basic Tables',
        component: BasicTableComponent,
        parent: 'app.table'
    },
    {
        name: 'app.table.managed',
        url: '/managed',
        title: 'Managed Tables',
        component: ManagedTableComponent,
        parent: 'app.table'
    }];


