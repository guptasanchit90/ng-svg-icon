webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_svg_icon__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_svg_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_svg_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(ngSvgIconService, toastCtrl) {
        var _this = this;
        this.ngSvgIconService = ngSvgIconService;
        this.toastCtrl = toastCtrl;
        this.color = "red";
        this.size = "50";
        this.viewBox = "0 0 24 24";
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.iconNames = Object.keys(ngSvgIconService.getShapes());
        this.iconsToShow = this.iconNames;
        this.searchTerm$.debounceTime(200)
            .distinctUntilChanged()
            .do(function (res) {
            _this.iconsToShow = _this.iconNames;
        })
            .filter(function (res) { return !!res; })
            .map(function (res) { return res.toLowerCase(); })
            .subscribe(function (term) {
            _this.iconsToShow = _this.iconsToShow.filter(function (iconName) {
                return (iconName.toLowerCase().indexOf(term.toLowerCase()) !== -1);
            });
        });
    }
    HomePage.prototype.copySuccess = function () {
        this.toastCtrl.create({
            message: "Coppied",
            duration: 1000
        }).present();
    };
    HomePage.prototype.onRuleFilter = function (event) {
        this.searchTerm$.next(event.target.value);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sanchit.gupta/Documents/OpenSource/ngSvgIcon/sample/ng-svg-icon-sample/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar text-center color="primary">\n    <ion-title>\n      Welcome to Ng-Svg-Icon\n    </ion-title>\n    <ion-buttons end padding-right>\n      <a margin-right href="https://www.npmjs.com/package/ng-svg-icon" target="_blank">NPM</a>\n      <a margin-right href="https://github.com/guptasanchit90/ng-svg-icon" target="_blank">Github</a>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-row>\n    <ion-searchbar color="danger" no-padding no-margin (ionInput)="onRuleFilter($event)"></ion-searchbar>\n  </ion-row>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-card padding col-auto *ngFor="let iconName of iconsToShow" ngxClipboard [cbContent]="iconName" (cbOnSuccess)="copySuccess()">\n        <ion-row text-center>\n          <ng-svg-icon style="margin:auto;" [name]="iconName" [color]="color" [size]="size" [viewBox]="viewBox"></ng-svg-icon>\n        </ion-row>\n        <ion-card-content style="font-size:small; font-weight: 700;" text-center>\n          {{iconName}}\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="light">\n\n    <ion-row>\n      <ion-col col-sm-4 col-12>\n        <ion-item>\n          <ion-label>Color</ion-label>\n          <ion-input type="text" no-line [(ngModel)]="color"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-sm-4 col-12>\n        <ion-item>\n          <ion-label>ViewBox</ion-label>\n          <ion-input type="text" [(ngModel)]="viewBox"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-sm-4 col-12>\n        <ion-item>\n          <ion-label>Size</ion-label>\n          <ion-input type="text" [(ngModel)]="size"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/sanchit.gupta/Documents/OpenSource/ngSvgIcon/sample/ng-svg-icon-sample/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_svg_icon__["NgSvgIconService"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_svg_icon__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_svg_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_svg_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_clipboard__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6_ngx_clipboard__["a" /* ClipboardModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_svg_icon__["NgSvgIconModule"].forRoot({
                    defaultColor: '#000',
                    defaultSize: 50,
                    defaultViewBox: '0 0 24 24'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/sanchit.gupta/Documents/OpenSource/ngSvgIcon/sample/ng-svg-icon-sample/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sanchit.gupta/Documents/OpenSource/ngSvgIcon/sample/ng-svg-icon-sample/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map