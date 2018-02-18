import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { GipsterGtwySharedModule, UserRouteAccessService } from './shared';
import { GipsterGtwyAppRoutingModule} from './app-routing.module';
import { GipsterGtwyHomeModule } from './home/home.module';
import { GipsterGtwyAdminModule } from './admin/admin.module';
import { GipsterGtwyAccountModule } from './account/account.module';
import { GipsterGtwyEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        GipsterGtwyAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        GipsterGtwySharedModule,
        GipsterGtwyHomeModule,
        GipsterGtwyAdminModule,
        GipsterGtwyAccountModule,
        GipsterGtwyEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class GipsterGtwyAppModule {}
