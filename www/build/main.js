webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage() {
    }
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to your first Ionic app!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams, platform, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage.prototype.openMenu = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'play' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n  <button ion-button block (click)="openMenu()">Show Action Sheet</button>\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\item-details\item-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionsheetPage = /** @class */ (function () {
    function ActionsheetPage(platform, actionSheetCtrl) {
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ActionsheetPage.prototype.openMenu = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'play' : null,
                    handler: function () {
                        console.log('Play');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ActionsheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actionsheet',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\actionsheet\actionsheet.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Action Sheets</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n\n  <button ion-button block (click)="openMenu()">\n    Show Action Sheet\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\actionsheet\actionsheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionsheetPage);
    return ActionsheetPage;
}());

//# sourceMappingURL=actionsheet.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertPage = /** @class */ (function () {
    function AlertPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Hey friend!',
            subTitle: 'How do you do today!',
            buttons: ['OK']
        });
        alert.present();
    };
    //提示警报
    AlertPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: 'Please insert a name.',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel', data);
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Save', data);
                    }
                }
            ]
        });
        prompt.present();
    };
    //确认警报
    AlertPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Do you agree to enter?',
            message: 'You will enter a blank page.',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree');
                    }
                },
                {
                    text: 'Aagree',
                    handler: function () {
                        console.log('Agree');
                    }
                }
            ]
        });
        confirm.present();
    };
    //收音机
    AlertPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        alert.addInput({
            type: 'radio',
            label: 'Orange',
            value: 'yellow'
        });
        alert.addInput({
            type: 'radio',
            label: 'Pink',
            value: 'pink'
        });
        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log('Radio data', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present()
            .then(function () {
            _this.testRadioOpen = true;
        });
    };
    //复选框
    AlertPage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value7'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value8'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present()
            .then(function () {
            _this.testRadioOpen = true;
        });
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\alert\alert.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Alert</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-alert-basic-page">\n\n  <button class="ion-alert-button-one" ion-button block (click)="showAlert()">\n    Show Alert\n  </button>\n\n  <button class="ion-alert-button-two" ion-button block (click)="showPrompt()">\n    Show Prompt Alert\n  </button>\n\n  <button class="ion-alert-button-thr" ion-button block (click)="showConfirm()">\n    Show Prompt Alert\n  </button>\n\n  <button class="ion-alert-button-fou" ion-button block (click)="doRadio()">\n    Show Radio Alert\n  </button>\n  <button class="ion-alert-button-fiv" ion-button block (click)="showCheckbox()">\n    Show Checkbox Alert\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\alert\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgePage = /** @class */ (function () {
    function BadgePage() {
    }
    BadgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-badge',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\badge\badge.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Badge</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-badge-basic-page">\n  <ion-card>\n    <img src="https://ionicframework.com/dist/preview-app/www/assets/img/bjork-live.jpg">\n    <ion-card-content>\n      <ion-card-title>\n        Björk\n      </ion-card-title>\n      <p>\n        Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...\n      </p>\n    </ion-card-content>\n    <ion-item>\n      <ion-icon name="musical-notes" item-start style="color: #d03e84;"></ion-icon>\n      Albums\n      <ion-badge item-end>9</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start style="color: #55acee"></ion-icon>\n      Followers\n      <ion-badge item-end>260k</ion-badge>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535451241312&di=0bc0db4b6d77df03ba2688c638ab9f10&imgtype=0&src=http%3A%2F%2Fwww2.cool-style.com.tw%2Fcool%2F2016%2F05%2FStussyXimenReopening_2.jpg">\n    <ion-card-content>\n      <ion-card-title>\n        Stussy\n      </ion-card-title>\n      <p>\n        stussy（中文为斯图西）是源于美国的潮流品牌。创始人是Shawn，Stussy将滑板服、工作服、旧校服的设计加入到斯图西的服装设计中，形成了一种有别于原有风格的街头服装。\n      </p>\n    </ion-card-content>\n    <ion-item>\n      <ion-icon name="musical-notes" item-start style="color: #d03e84;"></ion-icon>\n      Albums\n      <ion-badge item-end>7</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start style="color: #55acee"></ion-icon>\n      Followers\n      <ion-badge item-end>287k</ion-badge>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\badge\badge.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BadgePage);
    return BadgePage;
}());

//# sourceMappingURL=badge.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonPage = /** @class */ (function () {
    function ButtonPage() {
    }
    ButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-button',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\button\button.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-button-basic-page">\n\n  <p>\n    <!--基本-->\n    <button ion-button color="light">Light</button>\n    <button ion-button>Default</button>\n    <button ion-button color="secondary">Secondary</button>\n    <button ion-button color="Danger">Danger</button>\n    <button ion-button color="dark">Dark</button>\n  </p>\n\n  <p>\n    <!--轮廓-->\n    <button ion-button color="light" outline>Light Outline</button>\n    <button ion-button color="" outline>Primary Outline</button>\n    <button ion-button color="secondary" outline>Secondary Outline</button>\n    <button ion-button color="dager" outline>Danger Outline</button>\n    <button ion-button color="dark" outline>Dark Outline</button>\n  </p>\n\n  <p>\n    <!--无轮廓-->\n    <button ion-button color="light" clear>Light Clear</button>\n    <button ion-button clear>Primary Clear</button>\n    <button ion-button color="secondary" clear>Secondary Clear</button>\n    <button ion-button color="danger" clear>Danger Clear</button>\n    <button ion-button color="dark" clear>Dark Clear</button>\n  </p>\n\n  <p>\n    <!--圆按钮-->\n    <button ion-button color="light" round>Light Round</button>\n    <button ion-button round>Primary Round</button>\n    <button ion-button color="secondary" round>Secondary Round</button>\n    <button ion-button color="danger" round>Danger Round</button>\n    <button ion-button color="dark" round>Dark Round</button>\n  </p>\n\n  <p>\n    <!--块按钮-->\n    <button ion-button block>Block Button</button>\n  </p>\n\n  <p>\n    <!--全按钮-->\n    <button ion-button full>Full Button</button>\n  </p>\n\n  <p>\n    <!--按钮尺寸-->\n    <button ion-button small>Small</button>\n    <button ion-button>Default</button>\n    <button ion-button large>Large</button>\n  </p>\n\n  <!--图标按钮-->\n  <p>\n    <button ion-button color="light" icon-start>\n      <ion-icon name="arrow-back"></ion-icon>\n      Back\n    </button>\n\n    <button ion-button color="light" icon-only>\n      <ion-icon name="arrow-down"></ion-icon>\n    </button>\n\n    <button ion-button color="light" icon-only>\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n\n    <button ion-button color="light" icon-end>\n      <ion-icon name="arrow-forward"></ion-icon>\n      Next\n    </button>\n  </p>\n  <p>\n    <button ion-button icon-start>\n      <ion-icon name="home"></ion-icon>\n      Home\n    </button>\n    <button ion-button outline icon-start>\n      <ion-icon name="briefcase" is-active="false"></ion-icon>\n      Work\n    </button>\n    <button ion-button clear icon-start>\n      <ion-icon name="beer" is-active="false"></ion-icon>\n      Pub\n    </button>\n  </p>\n  <p>\n    <button ion-button color="secondary" icon-start="">\n      <ion-icon name="people"></ion-icon>\n      Friends\n    </button>\n    <button ion-button color="secondary" icon-start>\n      <ion-icon name="paw" is-active="false"></ion-icon>\n      Best Friend\n    </button>\n  </p>\n  <p>\n    <button ion-button color="danger" ion-start>\n      <ion-icon name="close"></ion-icon>\n      Remove\n    </button>\n    <button ion-button color="danger" outline icon-only>\n      <ion-icon name="remove-circle" is-active="false"></ion-icon>\n    </button>\n    <button ion-button color="danger" clear icon-only>\n      <ion-icon name="trash" is-active="false"></ion-icon>\n    </button>\n  </p>\n  <p>\n    <button ion-button color="dark" round icon-start>\n      <ion-icon name="construct" is-active="false"></ion-icon>\n      Tools\n    </button>\n    <button ion-button color="dark" clear icon-only>\n      <ion-icon name="hammer" is-active="false"></ion-icon>\n    </button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\button\button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentButtonsPage = /** @class */ (function () {
    function ComponentButtonsPage() {
    }
    ComponentButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-component-buttons',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\component-buttons\component-buttons.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Component Buttons</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="buttons-components-page">\n\n  <ion-card>\n    <ion-card-content>\n      <img src="http://i2.wp.com/overdope.com/wp-content/uploads/2013/08/20130805182139.jpg?fit=500,305&quality=100">\n    </ion-card-content>\n    <ion-item>\n      <button ion-button clear item-start>Like</button>\n      <button ion-button clear item-end>Comment</button>\n    </ion-item>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      Inner Button\n      <button ion-button item-end outline>Outline</button>\n    </ion-item>\n\n    <ion-item>\n      Left Icon Button\n      <button ion-button item-end outline icon-start>\n        <ion-icon name="star"></ion-icon>\n        Left Icon\n      </button>\n    </ion-item>\n\n    <ion-item>\n      Right Icon Button\n      <button ion-button item-end outline icon-end>\n        Right Icon\n        <ion-icon name="star"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\component-buttons\component-buttons.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComponentButtonsPage);
    return ComponentButtonsPage;
}());

//# sourceMappingURL=component-buttons.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardPage = /** @class */ (function () {
    function CardPage() {
    }
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\card\card.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <!--卡片头-->\n  <ion-card>\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      I\'m from China,I\'m prode of being a Chinese!I will be stronger and then I can protect my family from demage.\n    </ion-card-content>\n  </ion-card>\n<!--卡片列表-->\n  <ion-card>\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="cart" item-start></ion-icon>\n        Shopping\n      </button>\n      <button ion-item>\n        <ion-icon name="medical" item-start></ion-icon>\n        Hospital\n      </button>\n      <button ion-item>\n        <ion-icon name="cafe" item-start></ion-icon>\n        Cafe\n      </button>\n      <button ion-item>\n        <ion-icon name="paw" item-start></ion-icon>\n        Dog Park\n      </button>\n      <button ion-item>\n        <ion-icon name="beer" item-start></ion-icon>\n        Pub\n      </button>\n      <button ion-item>\n        <ion-icon name="planet" item-start></ion-icon>\n        Space\n      </button>\n    </ion-list>\n  </ion-card>\n<!--卡片中的图像-->\n  <ion-card>\n    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1556509862,4291498578&fm=26&gp=0.jpg">\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n      </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n    </ion-card-content>\n  </ion-card>\n<!--背景图像-->\n  <ion-card>\n    <img src="http://otherimg.s.cn/uploads/allimg/160705/1531-160F51K039438.jpg">\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n  <ion-card>\n    <img src="http://img2.enjoyz.com/2015/08/29/20150829022234227.jpg"/>\n    <div class="card-title">Amsterdam</div>\n    <div class="card-subtitle">64 Listings</div>\n  </ion-card>\n  <ion-card>\n    <img src="http://asia.media.fashionmag.com/m/a5c6/6921/e30a/0c7a/0104/3ffd/b6ac/1d4a/affc/43ed/43ed.jpg"/>\n    <div class="card-title">San Francisco</div>\n    <div class="card-subtitle">72 Listings</div>\n  </ion-card>\n  <!--社会卡-->\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="http://img.zcool.cn/community/01e6b857c52a370000018c1b0da193.jpg">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n    <img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/15/c5/24496292_1376533594774.jpg">\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!--地图卡-->\n  <ion-card>\n    <img src="http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1301/16/c0/17448568_1358310737079.jpg">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="football" item-start larger></ion-icon>\n      <h2>Museum of Football</h2>\n      <p>11 N. Way St, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="wine" item-start large></ion-icon>\n      <h2>Institute of Fine Cocktails</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-start>12 min</span>\n      <span item-start>(2.6 mi)</span>\n      <button ion-button icon-start clear item-end>\n        <ion-icon nae="navigate"></ion-icon>\n        Start\n      </button>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\card\card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckBoxPage = /** @class */ (function () {
    function CheckBoxPage() {
    }
    CheckBoxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-check-box',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\check-box\check-box.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Check Box</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Jon Snow</ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Daenerys Targaryen</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arya Stark</ion-label>\n      <ion-checkbox value="cherry" disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tyrion Lannister</ion-label>\n      <ion-checkbox color="secondary"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cersei Lannister</ion-label>\n      <ion-checkbox color="energized" checked="true" color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stannis Baratheon</ion-label>\n      <ion-checkbox color="royal" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Petyr Baelish</ion-label>\n      <ion-checkbox disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hodor</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catelyn Stark</ion-label>\n      <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bronn</ion-label>\n      <ion-checkbox color="royal"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\check-box\check-box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CheckBoxPage);
    return CheckBoxPage;
}());

//# sourceMappingURL=check-box.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateTimePage = /** @class */ (function () {
    function DateTimePage() {
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    DateTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-date-time',template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\pages\date-time\date-time.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>DateTime</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Location" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Start Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)="event.timeStarts"]></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ends</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n    </ion-item>\n    <button ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-note item-end>Never</ion-note>\n    </button>\n    <button ion-item>\n      <ion-label>Travel Time</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <button ion-item>\n      <ion-label>Alert</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\pages\date-time\date-time.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DateTimePage);
    return DateTimePage;
}());

//# sourceMappingURL=date-time.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_card_card__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_actionsheet_actionsheet__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_badge_badge__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_button_button__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_component_buttons_component_buttons__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_check_box_check_box__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_date_time_date_time__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_badge_badge__["a" /* BadgePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_component_buttons_component_buttons__["a" /* ComponentButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_check_box_check_box__["a" /* CheckBoxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_date_time_date_time__["a" /* DateTimePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_badge_badge__["a" /* BadgePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_component_buttons_component_buttons__["a" /* ComponentButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_check_box_check_box__["a" /* CheckBoxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_date_time_date_time__["a" /* DateTimePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_actionsheet_actionsheet__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_badge_badge__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_button_button__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_component_buttons_component_buttons__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_card_card__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_check_box_check_box__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_date_time_date_time__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Action Sheets', component: __WEBPACK_IMPORTED_MODULE_4__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */] },
            { title: 'Alert', component: __WEBPACK_IMPORTED_MODULE_5__pages_alert_alert__["a" /* AlertPage */] },
            { title: 'Badge', component: __WEBPACK_IMPORTED_MODULE_6__pages_badge_badge__["a" /* BadgePage */] },
            { title: 'Buttons', component: __WEBPACK_IMPORTED_MODULE_7__pages_button_button__["a" /* ButtonPage */] },
            { title: 'Component Buttons', component: __WEBPACK_IMPORTED_MODULE_8__pages_component_buttons_component_buttons__["a" /* ComponentButtonsPage */] },
            { title: 'Cards', component: __WEBPACK_IMPORTED_MODULE_9__pages_card_card__["a" /* CardPage */] },
            { title: 'Check Box', component: __WEBPACK_IMPORTED_MODULE_10__pages_check_box_check_box__["a" /* CheckBoxPage */] },
            { title: 'Date Time', component: __WEBPACK_IMPORTED_MODULE_11__pages_date_time_date_time__["a" /* DateTimePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        console.log(this.pages);
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\workspace\MyIonicProject\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Selector</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"F:\workspace\MyIonicProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map