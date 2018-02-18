import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    GipsterGtwySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        GipsterGtwySharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        GipsterGtwySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class GipsterGtwySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
