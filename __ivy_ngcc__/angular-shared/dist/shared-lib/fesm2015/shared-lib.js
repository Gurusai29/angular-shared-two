import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng2-charts';
class SharedLibService {
    constructor() { }
}
SharedLibService.ɵfac = function SharedLibService_Factory(t) { return new (t || SharedLibService)(); };
SharedLibService.ɵprov = ɵɵdefineInjectable({ factory: function SharedLibService_Factory() { return new SharedLibService(); }, token: SharedLibService, providedIn: "root" });
SharedLibService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SharedLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class SharedLibComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.lineChartData, 'line');
        console.log(this.lineChartLabels, 'labe');
    }
}
SharedLibComponent.ɵfac = function SharedLibComponent_Factory(t) { return new (t || SharedLibComponent)(); };
SharedLibComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SharedLibComponent, selectors: [["lib-shared-lib"]], inputs: { lineChartData: "lineChartData", lineChartLabels: "lineChartLabels", lineChartOptions: "lineChartOptions", lineChartColors: "lineChartColors", lineChartLegend: "lineChartLegend", lineChartType: "lineChartType", lineChartPlugins: "lineChartPlugins" }, decls: 3, vars: 7, consts: [["baseChart", "", "width", "400", "height", "400", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]], template: function SharedLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1");
        ɵngcc0.ɵɵtext(1, "chart");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(2, "canvas", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [ɵngcc1.BaseChartDirective], encapsulation: 2 });
SharedLibComponent.ctorParameters = () => [];
SharedLibComponent.propDecorators = {
    lineChartData: [{ type: Input }],
    lineChartLabels: [{ type: Input }],
    lineChartOptions: [{ type: Input }],
    lineChartColors: [{ type: Input }],
    lineChartLegend: [{ type: Input }],
    lineChartType: [{ type: Input }],
    lineChartPlugins: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SharedLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-shared-lib',
                template: `<h1>chart</h1>
  <canvas baseChart width="400" height="400"
  [datasets]="lineChartData"
  [labels]="lineChartLabels"
  [options]="lineChartOptions"
  [colors]="lineChartColors"
  [legend]="lineChartLegend"
  [chartType]="lineChartType"
  [plugins]="lineChartPlugins">
  </canvas>`
            }]
    }], function () { return []; }, { lineChartData: [{
            type: Input
        }], lineChartLabels: [{
            type: Input
        }], lineChartOptions: [{
            type: Input
        }], lineChartColors: [{
            type: Input
        }], lineChartLegend: [{
            type: Input
        }], lineChartType: [{
            type: Input
        }], lineChartPlugins: [{
            type: Input
        }] }); })();

class SharedLibModule {
}
SharedLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SharedLibModule });
SharedLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); }, imports: [[
            ChartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SharedLibModule, { declarations: function () { return [SharedLibComponent]; }, imports: function () { return [ChartsModule]; }, exports: function () { return [SharedLibComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SharedLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SharedLibComponent],
                imports: [
                    ChartsModule
                ],
                exports: [SharedLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedLibComponent, SharedLibModule, SharedLibService };


//# sourceMappingURL=shared-lib.js.map