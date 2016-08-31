import {Http} from "@angular/http";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
import {UiElementComponent} from "./element";
import {GeneralElementComponent} from "./general";
import {TypographyComponent} from "./typography";
import {TabsComponent} from "./tabs";
import {NavTabsComponent} from "./navtabs";
import {ModalsComponent} from "./modal";
import {WidgetBoxComponent} from "./widgets";
import {MediaComponent} from "./media";
import {ButtonsComponent} from "./buttons";
import {IconsComponent} from "./icons";
import {LineIconsComponent} from "./lineicons";
import {IonIconsComponent} from "./ionicons";
import {TreeviewComponent} from "./treeview";
import {LanguageBarComponent} from "./languagebar";


export let UI_ELEMENT_STATES = [{
    name: 'app.element',
    title: 'UI Elements',
    component: UiElementComponent
  },
  {
    name: 'app.element.general',
    url: '/general',
    title: 'General',
    component: GeneralElementComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.typography',
    url: '/typography',
    title: 'Typography',
    component: TypographyComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.tabs',
    url: '/tabs-accordian',
    title: 'Tabs & Accordian',
    component: TabsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.navtabs',
    url: '/navtabs',
    title: 'Unlimited Nav Tabs',
    component: NavTabsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.modals',
    url: '/modals',
    title: 'Modals & Notifications',
    component: ModalsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.widgets',
    url: '/widgets',
    title: 'Widget Boxes',
    component: WidgetBoxComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.media',
    url: '/media',
    title: 'Media Object',
    component: MediaComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.buttons',
    url: '/buttons',
    title: 'Buttons',
    component: ButtonsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.icons',
    url: '/icons',
    title: 'Icons',
    component: IconsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.lineicons',
    url: '/lineicons',
    title: 'Simple Line Icons',
    component: LineIconsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.ionicons',
    url: '/ionicons',
    title: 'Ionicons',
    component: IonIconsComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.treeview',
    url: '/treeview',
    title: 'Tree View',
    component: TreeviewComponent,
    parent: 'app.element'
  },
  {
    name: 'app.element.languagebar',
    url: '/languagbar',
    title: 'Language Bar',
    component: LanguageBarComponent,
    parent: 'app.element'
}];


