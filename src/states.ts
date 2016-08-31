import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";
import {DASHBOARD_STATES} from "./app/dashboard/dashboard.states";
import {EMAIL_STATES} from "./app/email/email.states";
import {UI_ELEMENT_STATES} from "./app/elements/element.states";
import {FORM_STATES} from "./app/forms/form.states";
import {TABLE_STATES} from "./app/tables/table.states";
import {MainComponent} from "./app/main";

// The top level states
let MAIN_STATES = [
  { name: 'app', title: 'Dashboard', component: MainComponent }
];

// Combine MAIN_STATES, FOO_STATES, and BAR_STATES and export them.
// This array is imported in bootstrap/router.config.ts, then each state is registered
export let INITIAL_STATES: Ng2StateDeclaration[] =
    MAIN_STATES
        .concat(DASHBOARD_STATES)
        .concat(EMAIL_STATES)
        .concat(UI_ELEMENT_STATES)
        .concat(FORM_STATES)
        .concat(TABLE_STATES);
