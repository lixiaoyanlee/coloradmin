import {Http} from "@angular/http";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
import {DashboardMainComponent} from "./main";
import {DashboardV1Component} from "./dashboardv1";
import {DashboardV2Component} from "./dashboardv2";

export let DASHBOARD_STATES = [{
    name: 'app.dashboard',
    title: 'Dashboard',
    component: DashboardMainComponent
  },
  {
    name: 'app.dashboard.v1',
    parent: 'app.dashboard',
    title: 'Dashboard v1',
    url: '/dashboard',
    component: DashboardV1Component
  },
  {
    name: 'app.dashboard.v2',
    parent: 'app.dashboard',
    title: 'Dashboard v2',
    url: '/dashboard2',
    component: DashboardV2Component
  }
];


