
// import { SummaryComponent } from './theme/pages/default/summary/summary.component';

import { HttpModule } from '@angular/http';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";

import { AnalyticsComponent } from './theme/pages/default/analytics/analytics.component';
// import { InventoryComponent } from './theme/pages/default/index/inventory/inventory.component';
import { LeaderBoardComponent } from './theme/pages/default/leader-board/leader-board.component';
import { ActionChangesComponent } from './theme/pages/default/action-changes/action-changes.component';
// import { IndexComponent } from './theme/pages/default/index/index.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ServicesService } from './theme/pages/default/index/services.service';
import { InventoryComponent } from './theme/pages/default/inventory/inventory.component';




@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        AnalyticsComponent,
        LeaderBoardComponent,
        ActionChangesComponent,
        InventoryComponent,
        
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule, HttpModule,
        // RouterModule.forRoot([
        //     { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     { path: 'home', component: IndexComponent },
        //     { path: 'summary', component: SummaryComponent },
        //     { path: 'analytics', component: AnalyticsComponent },
        //     { path: 'inventory', component: InventoryComponent },
        //     { path: 'leaderboard', component: LeaderBoardComponent },
        //     { path: 'actionchange', component: ActionChangesComponent },
        // ]),

    ],
    providers: [ScriptLoaderService, ServicesService],
    bootstrap: [AppComponent]
})
export class AppModule { }