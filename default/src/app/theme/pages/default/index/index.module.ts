


import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { HttpModule } from '@angular/http';
import { ServicesService } from './services.service';
import { SummaryComponent } from './summary/summary.component';



const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent
            },
        ]
    },


];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, HttpClientModule, HttpModule,
        //     RouterModule.forRoot([
        //     { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     { path: 'home', component: IndexComponent },
        // { path: 'summary', component: SummaryComponent },
        //     { path: 'analytics', component: AnalyticsComponent },
        //     { path: 'inventory', component: InventoryComponent },
        //     { path: 'leaderboard', component: LeaderBoardComponent },
        //     { path: 'actionchange', component: ActionChangesComponent },
        // ]),

    ],



    exports: [
        RouterModule
    ],
    entryComponents: [IndexComponent
    ],

    providers: [ServicesService],


    declarations: [
        IndexComponent,
        SummaryComponent,
        
        
    ]
})
export class IndexModule {



}