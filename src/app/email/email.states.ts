import {Http} from "@angular/http";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
import {EmailComponent} from "./email";
import {InboxV1Component} from "./v1";
import {InboxV2Component} from "./v2";
import {EmailComposeComponent} from "./compose";
import {EmailDetailComponent} from "./detail";

export let EMAIL_STATES = [{
    name: 'app.email',
    title: 'Email',
    component: EmailComponent
  },
  {
    name: 'app.email.inboxv1',
    url: '/inbox_v1',
    title: 'Inbox v1',
    component: InboxV1Component,
    parent: 'app.email'
  },
  {
    name: 'app.email.inboxv2',
    url: '/inbox_v2',
    title: 'Inbox v2',
    component: InboxV2Component,
    parent: 'app.email'
  },
  {
    name: 'app.email.compose',
    url: '/compose',
    title: 'Compose',
    component: EmailComposeComponent,
    parent: 'app.email'
  },
  {
    name: 'app.email.detail',
    url: '/detail',
    title: 'Detail',
    component: EmailDetailComponent,
    parent: 'app.email'
  }];


