import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
    selector: "app-base-local-sort",
    templateUrl: "./base-local-sort.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class BaseLocalSortComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-base-local-sort',
            ['assets/demo/default/custom/crud/approach-datatable/base/local-sort.js']);

    }

}