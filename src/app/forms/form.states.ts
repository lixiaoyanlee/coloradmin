import {Http} from "@angular/http";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
import {FormComponent} from "./form";
import {FormElementsComponent} from "./formelements";
import {FormMultifileUploadComponent} from "./formmultifileupload";
import {FormPluginsComponent} from "./formplugins";
import {FormSliderComponent} from "./formslider";
import {FormValidationComponent} from "./formvalidation";
import {FormWizardComponent} from "./formwizard";
import {FormWizardValidationComponent} from "./formwizvalidation";
import {FormWYSIWYGComponent} from "./formwysiwyg";
import {FormXEditableComponent} from "./formxeditable";

export let FORM_STATES = [{
        name: 'app.form',
        title: 'Form Stuff',
        component: FormComponent
    },
    {
        name: 'app.form.elements',
        url: '/elements',
        title: 'Form Elements',
        component: FormElementsComponent,
        parent: 'app.form'
    },
    {
        name: 'app.form.plugins',
        url: '/plugins',
        title: 'Form Plugins',
        component: FormPluginsComponent,
        parent: 'app.form'
    },
    {
        name: 'app.form.slider',
        url: '/slider-switcher',
        title: 'Form Slider & Switcher',
        component: FormSliderComponent,
        parent: 'app.form'
    },
    {
        name: 'app.form.validation',
        url: '/validation',
        title: 'Form Validation',
        component: FormValidationComponent,
        parent: 'app.form'
    }, {
        name: 'app.form.wizards',
        url: '/wizards',
        title: 'Wizards',
        component: FormWizardComponent,
        parent: 'app.form'
    }, {
        name: 'app.form.wizvalidation',
        url: '/wizard-validation',
        title: 'Wizards + Validation',
        component: FormWizardValidationComponent,
        parent: 'app.form'
    }, {
        name: 'app.form.wysiwyg',
        url: '/wysiwyg',
        title: 'WYSIWYG',
        component: FormWYSIWYGComponent,
        parent: 'app.form'
    }, {
        name: 'app.form.xeditable',
        url: '/xeditable',
        title: 'X-Editable',
        component: FormXEditableComponent,
        parent: 'app.form'
    }, {
        name: 'app.form.multiplefileupload',
        url: '/multiple-file-upload',
        title: 'Multiple File Upload',
        component: FormMultifileUploadComponent,
        parent: 'app.form'
}];


