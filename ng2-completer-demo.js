webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterCmp", function() { return __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_completer_service__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterService", function() { return __WEBPACK_IMPORTED_MODULE_2__services_completer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_data__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalData", function() { return __WEBPACK_IMPORTED_MODULE_3__services_local_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_remote_data__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteData", function() { return __WEBPACK_IMPORTED_MODULE_4__services_remote_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_base_data__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterBaseData", function() { return __WEBPACK_IMPORTED_MODULE_5__services_completer_base_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_ctr_completer__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrCompleter", function() { return __WEBPACK_IMPORTED_MODULE_6__directives_ctr_completer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_ctr_dropdown__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrDropdown", function() { return __WEBPACK_IMPORTED_MODULE_7__directives_ctr_dropdown__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_input__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrInput", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_ctr_input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_list__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrList", function() { return __WEBPACK_IMPORTED_MODULE_9__directives_ctr_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_row__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrRow", function() { return __WEBPACK_IMPORTED_MODULE_10__directives_ctr_row__["a"]; });













/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(567);




if (true) {
    // Production
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAX_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIN_SEARCH_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TEXT_SEARCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEXT_NORESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_TIMEOUT; });
var MAX_CHARS = 524288; // the default max length per the html maxlength attribute
// the default max length per the html maxlength attribute
var MIN_SEARCH_LENGTH = 3;
var PAUSE = 250;
var TEXT_SEARCHING = "Searching...";
var TEXT_NORESULTS = "No results found";
var CLEAR_TIMEOUT = 100;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterCmp; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CompleterCmp; }),
    multi: true
};
var CompleterCmp = (function () {
    function CompleterCmp() {
        this.inputName = "";
        this.pause = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* PAUSE */];
        this.minSearchLength = __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.maxChars = __WEBPACK_IMPORTED_MODULE_3__globals__["d" /* MAX_CHARS */];
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.textSearching = __WEBPACK_IMPORTED_MODULE_3__globals__["e" /* TEXT_SEARCHING */];
        this.textNoResults = __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* TEXT_NORESULTS */];
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchStr = "";
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("");
        this.displaySearching = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmp.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmp.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmp.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmp.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            var title = item ? item.title : "";
            _this.selected.emit(item);
            _this._onChangeCallback(title);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        if (this.textSearching === "false") {
            this.displaySearching = false;
        }
    };
    CompleterCmp.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
    };
    CompleterCmp.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterCmp.prototype.open = function (searchValue) {
        if (searchValue === void 0) { searchValue = ""; }
        this.completer.search(searchValue);
    };
    CompleterCmp.prototype.close = function () {
        this.completer.clear();
    };
    return CompleterCmp;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "dataService", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "inputName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "pause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "minSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "maxChars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterCmp.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "textSearching", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "textNoResults", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CompleterCmp.prototype, "fieldTabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "disableInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterCmp.prototype, "inputClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "autofocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmp.prototype, "blur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__["a" /* CtrCompleter */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__["a" /* CtrCompleter */])
], CompleterCmp.prototype, "completer", void 0);
CompleterCmp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "ng2-completer",
        template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input type=\"search\" class=\"completer-input\" ctrInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [overrideSuggested]=\"overrideSuggested\" \n                [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\" [autofocus]=\"autofocus\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\" *ctrList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; let items = results; let searchActive = searching; let isInitialized = searchInitialized;\">\n                <div class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{textSearching}}</div>\n                    <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{textNoResults}}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
        styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px; \n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
        providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], CompleterCmp);



/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ctr_completer__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var CtrInput = (function () {
    function CtrInput(completer, ngModel) {
        var _this = this;
        this.completer = completer;
        this.ngModel = ngModel;
        this.clearSelected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        this.ngModel.valueChanges.subscribe(function (value) {
            if (_this._displayStr != value) {
                _this.searchStr = value;
            }
        });
    }
    CtrInput.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (!this.searchStr) {
                this.completer.onSelected(null);
                this.completer.clear();
                return;
            }
            this.completer.search(this.searchStr);
        }
    };
    CtrInput.prototype.keydownHandler = function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlited()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    CtrInput.prototype.onBlur = function (event) {
        var _this = this;
        setTimeout(function () {
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                _this.restoreSearchValue();
            }
            _this.completer.clear();
        }, 200);
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    CtrInput.prototype.handleSelection = function () {
        if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else if (this.completer.hasHighlited()) {
            this.completer.selectCurrent();
        }
        else {
            this.completer.clear();
        }
    };
    CtrInput.prototype.restoreSearchValue = function () {
        if (this.fillHighlighted) {
            // Restore searched value if there is no overrideSuggested
            if (this._displayStr != this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    return CtrInput;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("clearSelected"),
    __metadata("design:type", Object)
], CtrInput.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("overrideSuggested"),
    __metadata("design:type", Object)
], CtrInput.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("fillHighlighted"),
    __metadata("design:type", Object)
], CtrInput.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CtrInput.prototype, "ngModelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("keyup", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "keyupHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "keydownHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("blur", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrInput.prototype, "onBlur", null);
CtrInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrInput]",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ctr_completer__["a" /* CtrCompleter */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"]])
], CtrInput);



/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ctr_completer__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(124);
/* unused harmony export CtrListContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
    }
    return CtrListContext;
}());

var CtrList = CtrList_1 = (function () {
    function CtrList(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ctrListMinSearchLength = __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.ctrListPause = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* PAUSE */];
        this.ctrListAutoMatch = false;
        // private results: CompleterItem[] = [];
        this.term = null;
        // private searching = false;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false);
    }
    CtrList.hasTerm = function (term) {
        return term || term === "";
    };
    CtrList.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false));
    };
    Object.defineProperty(CtrList.prototype, "dataService", {
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .catch(function (err) { return _this.handleError(err); })
                    .subscribe(function (results) {
                    _this.ctx.searchInitialized = true;
                    _this.ctx.searching = false;
                    _this.ctx.results = results;
                    if (_this.ctrListAutoMatch && results.length === 1 && results[0].title && CtrList_1.hasTerm(_this.term) &&
                        results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                        // Do automatch
                        _this.completer.onSelected(results[0]);
                    }
                    _this.refreshTemplate();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    CtrList.prototype.search = function (term) {
        var _this = this;
        if (CtrList_1.hasTerm(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(this.ctrListPause).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
    };
    CtrList.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(__WEBPACK_IMPORTED_MODULE_3__globals__["c" /* CLEAR_TIMEOUT */]).subscribe(function () {
            _this._clear();
        });
    };
    CtrList.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.ctx.results = [];
        this.ctx.searchInitialized = false;
        this.term = null;
        this.viewContainer.clear();
    };
    CtrList.prototype.searchTimerComplete = function (term) {
        // Begin the search
        if (!CtrList_1.hasTerm(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    CtrList.prototype.handleError = function (error) {
        this.ctx.searching = false;
        var errMsg = "search error";
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : "Server error";
        }
        if (console && console.error) {
            console.error(errMsg); // log to console 
        }
        this.refreshTemplate();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
    };
    CtrList.prototype.refreshTemplate = function () {
        // Recreate the template
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        this.cd.markForCheck();
    };
    return CtrList;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListMinSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListPause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CtrList.prototype, "ctrListAutoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("ctrList"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrList.prototype, "dataService", null);
CtrList = CtrList_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrList]",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ctr_completer__["a" /* CtrCompleter */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], CtrList);

var CtrList_1;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRow; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CtrRow = (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    CtrRow.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["a" /* CtrRowItem */](this, this._rowIndex));
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    CtrRow.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    CtrRow.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    CtrRow.prototype.setHighlited = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    CtrRow.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    CtrRow.prototype.getDataItem = function () {
        return this._item;
    };
    return CtrRow;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CtrRow.prototype, "ctrRow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CtrRow.prototype, "dataItem", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("mouseenter", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CtrRow.prototype, "onMouseEnter", null);
CtrRow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrRow]",
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["b" /* CtrDropdown */]])
], CtrRow);



/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CompleterService = (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
        remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory; // Using any instead of () => LocalData because on AoT errors
    }
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFieldss(searchFields)
            .titleField(titleField);
    };
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ""; }
        if (titleField === void 0) { titleField = ""; }
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFieldss(searchFields)
            .titleField(titleField);
    };
    return CompleterService;
}());
CompleterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */])),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */])),
    __metadata("design:paramtypes", [Object, Object])
], CompleterService);



/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterListItemCmp; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompleterListItemCmp = (function () {
    function CompleterListItemCmp() {
        this.parts = [];
    }
    CompleterListItemCmp.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    return CompleterListItemCmp;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "searchStr", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterListItemCmp.prototype, "type", void 0);
CompleterListItemCmp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "completer-list-item",
        template: "\n    <span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>\n    "
    })
], CompleterListItemCmp);



/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2CompleterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var Ng2CompleterModule = (function () {
    function Ng2CompleterModule() {
    }
    return Ng2CompleterModule;
}());
Ng2CompleterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
            __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
            __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["b" /* CtrDropdown */],
            __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
            __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
            __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */],
            __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */],
            __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
            __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
            __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["b" /* CtrDropdown */],
            __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
            __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
            __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_completer_service__["a" /* CompleterService */],
            __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["a" /* LocalDataFactoryProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["b" /* RemoteDataFactoryProvider */]
        ]
    })
], Ng2CompleterModule);



/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__(96);
/* unused harmony export localDataFactory */
/* unused harmony export remoteDataFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataFactoryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoteDataFactoryProvider; });



function localDataFactory() {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */]();
    };
}
function remoteDataFactory(http) {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */](http);
    };
}
var LocalDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */], useFactory: localDataFactory };
var RemoteDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */], useFactory: remoteDataFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]] };


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrCompleter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtrCompleter = (function () {
    function CtrCompleter() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._hasHighlited = false;
        this.hasSelected = false;
    }
    CtrCompleter.prototype.ngOnInit = function () {
        //
    };
    CtrCompleter.prototype.registerList = function (list) {
        this.list = list;
    };
    CtrCompleter.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    CtrCompleter.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlited = !!item;
    };
    CtrCompleter.prototype.onSelected = function (item) {
        this.selected.emit(item);
        this.hasSelected = true;
        this.clear();
    };
    CtrCompleter.prototype.search = function (term) {
        if (this.hasSelected) {
            this.selected.emit(null);
            this.hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    CtrCompleter.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlited = false;
    };
    CtrCompleter.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    CtrCompleter.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    CtrCompleter.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    CtrCompleter.prototype.hasHighlited = function () {
        return this._hasHighlited;
    };
    return CtrCompleter;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CtrCompleter.prototype, "highlighted", void 0);
CtrCompleter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrCompleter]",
    }),
    __metadata("design:paramtypes", [])
], CtrCompleter);



/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialCmp; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var template = __webpack_require__(926);
// let style = require("./native-cmp.css");
var MaterialCmp = (function () {
    function MaterialCmp(completerService) {
        this.countries = __webpack_require__(529);
        this.dataService = completerService.local(this.countries, "name", "name").imageField("flag");
    }
    return MaterialCmp;
}());
MaterialCmp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "material-cmp",
        template: template,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__src__["CompleterService"]])
], MaterialCmp);



/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_data__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeCmp; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var template = __webpack_require__(928);
var style = __webpack_require__(927);
var NativeCmp = (function () {
    function NativeCmp(completerService, http) {
        this.countries = __webpack_require__(529);
        this.quotes = [
            {
                qt: "Always forgive your enemies; nothing annoys them so much.",
                nm: "Friedrich Nietzsche"
            },
            {
                qt: "Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.",
                nm: "E.B. White"
            },
            {
                qt: "Humor is perhaps a sense of intellectual perspective: an awareness that some things are really important, others not; and that the two kinds are most oddly jumbled in everyday affairs.",
                nm: "Voltaire"
            },
            {
                qt: "I think the next best thing to solving a problem is finding some humor in it.",
                nm: "Frank Howard Clark"
            },
            {
                qt: "Life is tough, and if you have the ability to laugh at it you have the ability to enjoy it.",
                nm: "Salma Hayek"
            },
            {
                qt: "Never be afraid to laugh at yourself. After all, you could be missing out on the joke of the century.",
                nm: "Benjamin Franklin"
            },
            {
                qt: "That is the saving grace of humor. If you fail no one is laughing at you.",
                nm: "William Arthur Ward"
            },
            {
                qt: "The best jokes are dangerous, and dangerous because they are in some way truthful.",
                nm: "Kurt Vonnegut"
            },
            {
                qt: "There’s so much comedy on television. Does that cause comedy in the streets?",
                nm: "Henry Ford"
            },
            {
                qt: "You are not angry with people when you laugh at them. Humor teaches tolerance.",
                nm: "W. Somerset Maugham"
            }
        ];
        this.countryName2 = "";
        this.quote = "";
        this.dataService = completerService.local(this.countries, "name", "name").imageField("flag");
        this.dataService2 = completerService.local(this.quotes, "nm", "nm").descriptionField("qt");
        this.dataRemote = completerService.remote("https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?", "name", "name");
        this.dataRemote2 = completerService.remote(null, null, "formatted_address");
        this.dataRemote2.urlFormater(function (term) {
            return "https://maps.googleapis.com/maps/api/geocode/json?address=" + term;
        });
        this.dataRemote2.dataField("results");
        this.dataRemote2.headers(new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ "My-Header": "Hello World!" }));
        // For async local the source can also be HTTP request
        // let source = http.get("https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?").map((res: any) => res.json());
        var source = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from([this.countries]).delay(3000);
        this.dataService3 = completerService.local(source, "name", "name");
        this.dataService4 = completerService.local(this.countries, "name", "name");
        this.dataService5 = completerService.local(this.countries.slice(1, 10), "name", "name");
        this.customData = new __WEBPACK_IMPORTED_MODULE_3__custom_data__["a" /* CustomData */](http);
        this.dataNoFill = completerService.remote("https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?", "name", "name");
    }
    NativeCmp.prototype.onCountrySelected = function (selected) {
        if (selected) {
            this.countryName2 = selected.title;
        }
        else {
            this.countryName2 = "";
        }
    };
    NativeCmp.prototype.onQuoteSelected = function (selected) {
        if (selected) {
            this.quote = selected.description;
        }
        else {
            this.quote = "";
        }
    };
    NativeCmp.prototype.onOpen = function () {
        this.openCloseExample.open();
    };
    NativeCmp.prototype.onClose = function () {
        this.openCloseExample.close();
    };
    return NativeCmp;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("openCloseExample"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__src__["CompleterCmp"])
], NativeCmp.prototype, "openCloseExample", void 0);
NativeCmp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "native-cmp",
        template: template,
        styles: [style]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__src__["CompleterService"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
], NativeCmp);



/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Afghanistan",
		"code": "AF",
		"flag": "demo/res/img/af.png"
	},
	{
		"name": "Aland Islands",
		"code": "AX",
		"flag": ""
	},
	{
		"name": "Albania",
		"code": "AL",
		"flag": "demo/res/img/al.png"
	},
	{
		"name": "Algeria",
		"code": "DZ",
		"flag": "demo/res/img/dz.png"
	},
	{
		"name": "American Samoa",
		"code": "AS",
		"flag": "demo/res/img/as.png"
	},
	{
		"name": "Andorra",
		"code": "AD",
		"flag": ""
	},
	{
		"name": "Angola",
		"code": "AO",
		"flag": "demo/res/img/ao.png"
	},
	{
		"name": "Anguilla",
		"code": "AI",
		"flag": "demo/res/img/ai.png"
	},
	{
		"name": "Antarctica",
		"code": "AQ",
		"flag": "demo/res/img/aq.png"
	},
	{
		"name": "Antigua and Barbuda",
		"code": "AG",
		"flag": "demo/res/img/ag.png"
	},
	{
		"name": "Argentina",
		"code": "AR",
		"flag": "demo/res/img/ar.png"
	},
	{
		"name": "Armenia",
		"code": "AM",
		"flag": "demo/res/img/am.png"
	},
	{
		"name": "Aruba",
		"code": "AW",
		"flag": "demo/res/img/aw.png"
	},
	{
		"name": "Australia",
		"code": "AU",
		"flag": "demo/res/img/au.png"
	},
	{
		"name": "Austria",
		"code": "AT",
		"flag": "demo/res/img/at.png"
	},
	{
		"name": "Azerbaijan",
		"code": "AZ",
		"flag": "demo/res/img/az.png"
	},
	{
		"name": "Bahamas",
		"code": "BS",
		"flag": "demo/res/img/bs.png"
	},
	{
		"name": "Bahrain",
		"code": "BH",
		"flag": "demo/res/img/bh.png"
	},
	{
		"name": "Bangladesh",
		"code": "BD",
		"flag": "demo/res/img/bd.png"
	},
	{
		"name": "Barbados",
		"code": "BB",
		"flag": "demo/res/img/bb.png"
	},
	{
		"name": "Belarus",
		"code": "BY",
		"flag": "demo/res/img/by.png"
	},
	{
		"name": "Belgium",
		"code": "BE",
		"flag": "demo/res/img/be.png"
	},
	{
		"name": "Belize",
		"code": "BZ",
		"flag": "demo/res/img/bz.png"
	},
	{
		"name": "Benin",
		"code": "BJ",
		"flag": "demo/res/img/bj.png"
	},
	{
		"name": "Bermuda",
		"code": "BM",
		"flag": "demo/res/img/bm.png"
	},
	{
		"name": "Bhutan",
		"code": "BT",
		"flag": "demo/res/img/bt.png"
	},
	{
		"name": "Bolivia",
		"code": "BO",
		"flag": "demo/res/img/bo.png"
	},
	{
		"name": "Bosnia and Herzegovina",
		"code": "BA",
		"flag": "demo/res/img/ba.png"
	},
	{
		"name": "Botswana",
		"code": "BW",
		"flag": "demo/res/img/bw.png"
	},
	{
		"name": "Bouvet Island",
		"code": "BV",
		"flag": ""
	},
	{
		"name": "Brazil",
		"code": "BR",
		"flag": "demo/res/img/br.png"
	},
	{
		"name": "British Indian Ocean Territory",
		"code": "IO",
		"flag": ""
	},
	{
		"name": "Brunei Darussalam",
		"code": "BN",
		"flag": "demo/res/img/bn.png"
	},
	{
		"name": "Bulgaria",
		"code": "BG",
		"flag": "demo/res/img/bg.png"
	},
	{
		"name": "Burkina Faso",
		"code": "BF",
		"flag": "demo/res/img/bf.png"
	},
	{
		"name": "Burundi",
		"code": "BI",
		"flag": "demo/res/img/bi.png"
	},
	{
		"name": "Cambodia",
		"code": "KH",
		"flag": "demo/res/img/kh.png"
	},
	{
		"name": "Cameroon",
		"code": "CM",
		"flag": "demo/res/img/cm.png"
	},
	{
		"name": "Canada",
		"code": "CA",
		"flag": "demo/res/img/ca.png"
	},
	{
		"name": "Cape Verde",
		"code": "CV",
		"flag": "demo/res/img/cv.png"
	},
	{
		"name": "Cayman Islands",
		"code": "KY",
		"flag": "demo/res/img/ky.png"
	},
	{
		"name": "Central African Republic",
		"code": "CF",
		"flag": "demo/res/img/cf.png"
	},
	{
		"name": "Chad",
		"code": "TD",
		"flag": "demo/res/img/td.png"
	},
	{
		"name": "Chile",
		"code": "CL",
		"flag": "demo/res/img/cl.png"
	},
	{
		"name": "China",
		"code": "CN",
		"flag": "demo/res/img/cn.png"
	},
	{
		"name": "Christmas Island",
		"code": "CX",
		"flag": ""
	},
	{
		"name": "Cocos (Keeling) Islands",
		"code": "CC",
		"flag": ""
	},
	{
		"name": "Colombia",
		"code": "CO",
		"flag": "demo/res/img/co.png"
	},
	{
		"name": "Comoros",
		"code": "KM",
		"flag": "demo/res/img/km.png"
	},
	{
		"name": "Congo",
		"code": "CG",
		"flag": "demo/res/img/cg.png"
	},
	{
		"name": "Congo, The Democratic Republic of the",
		"code": "CD",
		"flag": "demo/res/img/cd.png"
	},
	{
		"name": "Cook Islands",
		"code": "CK",
		"flag": "demo/res/img/ck.png"
	},
	{
		"name": "Costa Rica",
		"code": "CR",
		"flag": "demo/res/img/cr.png"
	},
	{
		"name": "Cote D\"Ivoire",
		"code": "CI",
		"flag": "demo/res/img/ci.png"
	},
	{
		"name": "Croatia",
		"code": "HR",
		"flag": "demo/res/img/hr.png"
	},
	{
		"name": "Cuba",
		"code": "CU",
		"flag": "demo/res/img/cu.png"
	},
	{
		"name": "Cyprus",
		"code": "CY",
		"flag": "demo/res/img/cy.png"
	},
	{
		"name": "Czech Republic",
		"code": "CZ",
		"flag": "demo/res/img/cz.png"
	},
	{
		"name": "Denmark",
		"code": "DK",
		"flag": "demo/res/img/dk.png"
	},
	{
		"name": "Djibouti",
		"code": "DJ",
		"flag": "demo/res/img/dj.png"
	},
	{
		"name": "Dominica",
		"code": "DM",
		"flag": "demo/res/img/dm.png"
	},
	{
		"name": "Dominican Republic",
		"code": "DO",
		"flag": "demo/res/img/do.png"
	},
	{
		"name": "Ecuador",
		"code": "EC",
		"flag": "demo/res/img/ec.png"
	},
	{
		"name": "Egypt",
		"code": "EG",
		"flag": "demo/res/img/eg.png"
	},
	{
		"name": "El Salvador",
		"code": "SV",
		"flag": "demo/res/img/sv.png"
	},
	{
		"name": "Equatorial Guinea",
		"code": "GQ",
		"flag": "demo/res/img/gq.png"
	},
	{
		"name": "Eritrea",
		"code": "ER",
		"flag": "demo/res/img/er.png"
	},
	{
		"name": "Estonia",
		"code": "EE",
		"flag": "demo/res/img/ee.png"
	},
	{
		"name": "Ethiopia",
		"code": "ET",
		"flag": "demo/res/img/et.png"
	},
	{
		"name": "Falkland Islands (Malvinas)",
		"code": "FK",
		"flag": ""
	},
	{
		"name": "Faroe Islands",
		"code": "FO",
		"flag": "demo/res/img/fo.png"
	},
	{
		"name": "Fiji",
		"code": "FJ",
		"flag": "demo/res/img/fj.png"
	},
	{
		"name": "Finland",
		"code": "FI",
		"flag": "demo/res/img/fi.png"
	},
	{
		"name": "France",
		"code": "FR",
		"flag": "demo/res/img/fr.png"
	},
	{
		"name": "French Guiana",
		"code": "GF",
		"flag": ""
	},
	{
		"name": "French Polynesia",
		"code": "PF",
		"flag": "demo/res/img/pf.png"
	},
	{
		"name": "French Southern Territories",
		"code": "TF",
		"flag": ""
	},
	{
		"name": "Gabon",
		"code": "GA",
		"flag": "demo/res/img/ga.png"
	},
	{
		"name": "Gambia",
		"code": "GM",
		"flag": "demo/res/img/gm.png"
	},
	{
		"name": "Georgia",
		"code": "GE",
		"flag": "demo/res/img/ge.png"
	},
	{
		"name": "Germany",
		"code": "DE",
		"flag": "demo/res/img/de.png"
	},
	{
		"name": "Ghana",
		"code": "GH",
		"flag": "demo/res/img/gh.png"
	},
	{
		"name": "Gibraltar",
		"code": "GI",
		"flag": "demo/res/img/gi.png"
	},
	{
		"name": "Greece",
		"code": "GR",
		"flag": "demo/res/img/gr.png"
	},
	{
		"name": "Greenland",
		"code": "GL",
		"flag": "demo/res/img/gl.png"
	},
	{
		"name": "Grenada",
		"code": "GD",
		"flag": "demo/res/img/gd.png"
	},
	{
		"name": "Guadeloupe",
		"code": "GP",
		"flag": "demo/res/img/gp.png"
	},
	{
		"name": "Guam",
		"code": "GU",
		"flag": "demo/res/img/gu.png"
	},
	{
		"name": "Guatemala",
		"code": "GT",
		"flag": "demo/res/img/gt.png"
	},
	{
		"name": "Guernsey",
		"code": "GG",
		"flag": "demo/res/img/gg.png"
	},
	{
		"name": "Guinea",
		"code": "GN",
		"flag": "demo/res/img/gn.png"
	},
	{
		"name": "Guinea-Bissau",
		"code": "GW",
		"flag": "demo/res/img/gw.png"
	},
	{
		"name": "Guyana",
		"code": "GY",
		"flag": "demo/res/img/gy.png"
	},
	{
		"name": "Haiti",
		"code": "HT",
		"flag": "demo/res/img/ht.png"
	},
	{
		"name": "Heard Island and Mcdonald Islands",
		"code": "HM",
		"flag": ""
	},
	{
		"name": "Holy See (Vatican City State)",
		"code": "VA",
		"flag": "demo/res/img/va.png"
	},
	{
		"name": "Honduras",
		"code": "HN",
		"flag": "demo/res/img/hn.png"
	},
	{
		"name": "Hong Kong",
		"code": "HK",
		"flag": "demo/res/img/hk.png"
	},
	{
		"name": "Hungary",
		"code": "HU",
		"flag": "demo/res/img/hu.png"
	},
	{
		"name": "Iceland",
		"code": "IS",
		"flag": "demo/res/img/is.png"
	},
	{
		"name": "India",
		"code": "IN",
		"flag": "demo/res/img/in.png"
	},
	{
		"name": "Indonesia",
		"code": "ID",
		"flag": "demo/res/img/id.png"
	},
	{
		"name": "Iran, Islamic Republic Of",
		"code": "IR",
		"flag": "demo/res/img/ir.png"
	},
	{
		"name": "Iraq",
		"code": "IQ",
		"flag": "demo/res/img/iq.png"
	},
	{
		"name": "Ireland",
		"code": "IE",
		"flag": "demo/res/img/ie.png"
	},
	{
		"name": "Isle of Man",
		"code": "IM",
		"flag": "demo/res/img/im.png"
	},
	{
		"name": "Israel",
		"code": "IL",
		"flag": "demo/res/img/il.png"
	},
	{
		"name": "Italy",
		"code": "IT",
		"flag": "demo/res/img/it.png"
	},
	{
		"name": "Jamaica",
		"code": "JM",
		"flag": "demo/res/img/jm.png"
	},
	{
		"name": "Japan",
		"code": "JP",
		"flag": "demo/res/img/jp.png"
	},
	{
		"name": "Jersey",
		"code": "JE",
		"flag": "demo/res/img/je.png"
	},
	{
		"name": "Jordan",
		"code": "JO",
		"flag": "demo/res/img/jo.png"
	},
	{
		"name": "Kazakhstan",
		"code": "KZ",
		"flag": "demo/res/img/kz.png"
	},
	{
		"name": "Kenya",
		"code": "KE",
		"flag": "demo/res/img/ke.png"
	},
	{
		"name": "Kiribati",
		"code": "KI",
		"flag": "demo/res/img/ki.png"
	},
	{
		"name": "Korea, Democratic People\"S Republic of",
		"code": "KP",
		"flag": "demo/res/img/kp.png"
	},
	{
		"name": "Korea, Republic of",
		"code": "KR",
		"flag": "demo/res/img/kr.png"
	},
	{
		"name": "Kuwait",
		"code": "KW",
		"flag": "demo/res/img/kw.png"
	},
	{
		"name": "Kyrgyzstan",
		"code": "KG",
		"flag": "demo/res/img/kg.png"
	},
	{
		"name": "Lao People\"S Democratic Republic",
		"code": "LA",
		"flag": "demo/res/img/la.png"
	},
	{
		"name": "Latvia",
		"code": "LV",
		"flag": "demo/res/img/lv.png"
	},
	{
		"name": "Lebanon",
		"code": "LB",
		"flag": "demo/res/img/lb.png"
	},
	{
		"name": "Lesotho",
		"code": "LS",
		"flag": "demo/res/img/ls.png"
	},
	{
		"name": "Liberia",
		"code": "LR",
		"flag": "demo/res/img/lr.png"
	},
	{
		"name": "Libyan Arab Jamahiriya",
		"code": "LY",
		"flag": "demo/res/img/ly.png"
	},
	{
		"name": "Liechtenstein",
		"code": "LI",
		"flag": "demo/res/img/li.png"
	},
	{
		"name": "Lithuania",
		"code": "LT",
		"flag": "demo/res/img/lt.png"
	},
	{
		"name": "Luxembourg",
		"code": "LU",
		"flag": "demo/res/img/lu.png"
	},
	{
		"name": "Macao",
		"code": "MO",
		"flag": "demo/res/img/mo.png"
	},
	{
		"name": "Macedonia, The Former Yugoslav Republic of",
		"code": "MK",
		"flag": "demo/res/img/mk.png"
	},
	{
		"name": "Madagascar",
		"code": "MG",
		"flag": "demo/res/img/mg.png"
	},
	{
		"name": "Malawi",
		"code": "MW",
		"flag": "demo/res/img/mw.png"
	},
	{
		"name": "Malaysia",
		"code": "MY",
		"flag": "demo/res/img/my.png"
	},
	{
		"name": "Maldives",
		"code": "MV",
		"flag": "demo/res/img/mv.png"
	},
	{
		"name": "Mali",
		"code": "ML",
		"flag": "demo/res/img/ml.png"
	},
	{
		"name": "Malta",
		"code": "MT",
		"flag": "demo/res/img/mt.png"
	},
	{
		"name": "Marshall Islands",
		"code": "MH",
		"flag": "demo/res/img/mh.png"
	},
	{
		"name": "Martinique",
		"code": "MQ",
		"flag": "demo/res/img/mq.png"
	},
	{
		"name": "Mauritania",
		"code": "MR",
		"flag": "demo/res/img/mr.png"
	},
	{
		"name": "Mauritius",
		"code": "MU",
		"flag": "demo/res/img/mu.png"
	},
	{
		"name": "Mayotte",
		"code": "YT",
		"flag": ""
	},
	{
		"name": "Mexico",
		"code": "MX",
		"flag": "demo/res/img/mx.png"
	},
	{
		"name": "Micronesia, Federated States of",
		"code": "FM",
		"flag": "demo/res/img/fm.png"
	},
	{
		"name": "Moldova, Republic of",
		"code": "MD",
		"flag": "demo/res/img/md.png"
	},
	{
		"name": "Monaco",
		"code": "MC",
		"flag": "demo/res/img/mc.png"
	},
	{
		"name": "Mongolia",
		"code": "MN",
		"flag": "demo/res/img/mn.png"
	},
	{
		"name": "Montserrat",
		"code": "MS",
		"flag": "demo/res/img/ms.png"
	},
	{
		"name": "Morocco",
		"code": "MA",
		"flag": "demo/res/img/ma.png"
	},
	{
		"name": "Mozambique",
		"code": "MZ",
		"flag": "demo/res/img/mz.png"
	},
	{
		"name": "Myanmar",
		"code": "MM",
		"flag": "demo/res/img/mm.png"
	},
	{
		"name": "Namibia",
		"code": "NA",
		"flag": "demo/res/img/na.png"
	},
	{
		"name": "Nauru",
		"code": "NR",
		"flag": "demo/res/img/nr.png"
	},
	{
		"name": "Nepal",
		"code": "NP",
		"flag": "demo/res/img/np.png"
	},
	{
		"name": "Netherlands",
		"code": "NL",
		"flag": "demo/res/img/nl.png"
	},
	{
		"name": "Netherlands Antilles",
		"code": "AN",
		"flag": "demo/res/img/an.png"
	},
	{
		"name": "New Caledonia",
		"code": "NC",
		"flag": "demo/res/img/nc.png"
	},
	{
		"name": "New Zealand",
		"code": "NZ",
		"flag": "demo/res/img/nz.png"
	},
	{
		"name": "Nicaragua",
		"code": "NI",
		"flag": "demo/res/img/ni.png"
	},
	{
		"name": "Niger",
		"code": "NE",
		"flag": "demo/res/img/ne.png"
	},
	{
		"name": "Nigeria",
		"code": "NG",
		"flag": "demo/res/img/ng.png"
	},
	{
		"name": "Niue",
		"code": "NU",
		"flag": ""
	},
	{
		"name": "Norfolk Island",
		"code": "NF",
		"flag": ""
	},
	{
		"name": "Northern Mariana Islands",
		"code": "MP",
		"flag": ""
	},
	{
		"name": "Norway",
		"code": "NO",
		"flag": "demo/res/img/no.png"
	},
	{
		"name": "Oman",
		"code": "OM",
		"flag": "demo/res/img/om.png"
	},
	{
		"name": "Pakistan",
		"code": "PK",
		"flag": "demo/res/img/pk.png"
	},
	{
		"name": "Palau",
		"code": "PW",
		"flag": "demo/res/img/pw.png"
	},
	{
		"name": "Palestinian Territory, Occupied",
		"code": "PS",
		"flag": "demo/res/img/ps.png"
	},
	{
		"name": "Panama",
		"code": "PA",
		"flag": "demo/res/img/pa.png"
	},
	{
		"name": "Papua New Guinea",
		"code": "PG",
		"flag": "demo/res/img/pg.png"
	},
	{
		"name": "Paraguay",
		"code": "PY",
		"flag": "demo/res/img/py.png"
	},
	{
		"name": "Peru",
		"code": "PE",
		"flag": "demo/res/img/pe.png"
	},
	{
		"name": "Philippines",
		"code": "PH",
		"flag": "demo/res/img/ph.png"
	},
	{
		"name": "Pitcairn",
		"code": "PN",
		"flag": ""
	},
	{
		"name": "Poland",
		"code": "PL",
		"flag": "demo/res/img/pl.png"
	},
	{
		"name": "Portugal",
		"code": "PT",
		"flag": "demo/res/img/pt.png"
	},
	{
		"name": "Puerto Rico",
		"code": "PR",
		"flag": "demo/res/img/pr.png"
	},
	{
		"name": "Qatar",
		"code": "QA",
		"flag": "demo/res/img/qa.png"
	},
	{
		"name": "Reunion",
		"code": "RE",
		"flag": "demo/res/img/re.png"
	},
	{
		"name": "Romania",
		"code": "RO",
		"flag": "demo/res/img/ro.png"
	},
	{
		"name": "Russian Federation",
		"code": "RU",
		"flag": "demo/res/img/ru.png"
	},
	{
		"name": "RWANDA",
		"code": "RW",
		"flag": "demo/res/img/rw.png"
	},
	{
		"name": "Saint Helena",
		"code": "SH",
		"flag": ""
	},
	{
		"name": "Saint Kitts and Nevis",
		"code": "KN",
		"flag": "demo/res/img/kn.png"
	},
	{
		"name": "Saint Lucia",
		"code": "LC",
		"flag": "demo/res/img/lc.png"
	},
	{
		"name": "Saint Pierre and Miquelon",
		"code": "PM",
		"flag": ""
	},
	{
		"name": "Saint Vincent and the Grenadines",
		"code": "VC",
		"flag": "demo/res/img/vc.png"
	},
	{
		"name": "Samoa",
		"code": "WS",
		"flag": "demo/res/img/ws.png"
	},
	{
		"name": "San Marino",
		"code": "SM",
		"flag": "demo/res/img/sm.png"
	},
	{
		"name": "Sao Tome and Principe",
		"code": "ST",
		"flag": "demo/res/img/st.png"
	},
	{
		"name": "Saudi Arabia",
		"code": "SA",
		"flag": "demo/res/img/sa.png"
	},
	{
		"name": "Senegal",
		"code": "SN",
		"flag": "demo/res/img/sn.png"
	},
	{
		"name": "Serbia and Montenegro",
		"code": "CS",
		"flag": ""
	},
	{
		"name": "Seychelles",
		"code": "SC",
		"flag": "demo/res/img/sc.png"
	},
	{
		"name": "Sierra Leone",
		"code": "SL",
		"flag": "demo/res/img/sl.png"
	},
	{
		"name": "Singapore",
		"code": "SG",
		"flag": "demo/res/img/sg.png"
	},
	{
		"name": "Slovakia",
		"code": "SK",
		"flag": "demo/res/img/sk.png"
	},
	{
		"name": "Slovenia",
		"code": "SI",
		"flag": "demo/res/img/si.png"
	},
	{
		"name": "Solomon Islands",
		"code": "SB",
		"flag": "demo/res/img/sb.png"
	},
	{
		"name": "Somalia",
		"code": "SO",
		"flag": "demo/res/img/so.png"
	},
	{
		"name": "South Africa",
		"code": "ZA",
		"flag": "demo/res/img/za.png"
	},
	{
		"name": "South Georgia and the South Sandwich Islands",
		"code": "GS",
		"flag": ""
	},
	{
		"name": "Spain",
		"code": "ES",
		"flag": "demo/res/img/es.png"
	},
	{
		"name": "Sri Lanka",
		"code": "LK",
		"flag": "demo/res/img/lk.png"
	},
	{
		"name": "Sudan",
		"code": "SD",
		"flag": "demo/res/img/sd.png"
	},
	{
		"name": "Suriname",
		"code": "SR",
		"flag": "demo/res/img/sr.png"
	},
	{
		"name": "Svalbard and Jan Mayen",
		"code": "SJ",
		"flag": ""
	},
	{
		"name": "Swaziland",
		"code": "SZ",
		"flag": "demo/res/img/sz.png"
	},
	{
		"name": "Sweden",
		"code": "SE",
		"flag": "demo/res/img/se.png"
	},
	{
		"name": "Switzerland",
		"code": "CH",
		"flag": "demo/res/img/ch.png"
	},
	{
		"name": "Syrian Arab Republic",
		"code": "SY",
		"flag": "demo/res/img/sy.png"
	},
	{
		"name": "Taiwan, Province of China",
		"code": "TW",
		"flag": "demo/res/img/tw.png"
	},
	{
		"name": "Tajikistan",
		"code": "TJ",
		"flag": "demo/res/img/tj.png"
	},
	{
		"name": "Tanzania, United Republic of",
		"code": "TZ",
		"flag": "demo/res/img/tz.png"
	},
	{
		"name": "Thailand",
		"code": "TH",
		"flag": "demo/res/img/th.png"
	},
	{
		"name": "Timor-Leste",
		"code": "TL",
		"flag": "demo/res/img/tl.png"
	},
	{
		"name": "Togo",
		"code": "TG",
		"flag": "demo/res/img/tg.png"
	},
	{
		"name": "Tokelau",
		"code": "TK",
		"flag": ""
	},
	{
		"name": "Tonga",
		"code": "TO",
		"flag": "demo/res/img/to.png"
	},
	{
		"name": "Trinidad and Tobago",
		"code": "TT",
		"flag": "demo/res/img/tt.png"
	},
	{
		"name": "Tunisia",
		"code": "TN",
		"flag": "demo/res/img/tn.png"
	},
	{
		"name": "Turkey",
		"code": "TR",
		"flag": "demo/res/img/tr.png"
	},
	{
		"name": "Turkmenistan",
		"code": "TM",
		"flag": "demo/res/img/tm.png"
	},
	{
		"name": "Turks and Caicos Islands",
		"code": "TC",
		"flag": "demo/res/img/tc.png"
	},
	{
		"name": "Tuvalu",
		"code": "TV",
		"flag": "demo/res/img/tv.png"
	},
	{
		"name": "Uganda",
		"code": "UG",
		"flag": "demo/res/img/ug.png"
	},
	{
		"name": "Ukraine",
		"code": "UA",
		"flag": "demo/res/img/ua.png"
	},
	{
		"name": "United Arab Emirates",
		"code": "AE",
		"flag": "demo/res/img/ae.png"
	},
	{
		"name": "United Kingdom",
		"code": "GB",
		"flag": "demo/res/img/gb.png"
	},
	{
		"name": "United States",
		"code": "US",
		"flag": "demo/res/img/us.png"
	},
	{
		"name": "United States Minor Outlying Islands",
		"code": "UM",
		"flag": ""
	},
	{
		"name": "Uruguay",
		"code": "UY",
		"flag": "demo/res/img/uy.png"
	},
	{
		"name": "Uzbekistan",
		"code": "UZ",
		"flag": "demo/res/img/uz.png"
	},
	{
		"name": "Vanuatu",
		"code": "VU",
		"flag": "demo/res/img/vu.png"
	},
	{
		"name": "Venezuela",
		"code": "VE",
		"flag": "demo/res/img/ve.png"
	},
	{
		"name": "Vietnam",
		"code": "VN",
		"flag": "demo/res/img/vn.png"
	},
	{
		"name": "Virgin Islands, British",
		"code": "VG",
		"flag": "demo/res/img/vg.png"
	},
	{
		"name": "Virgin Islands, U.S.",
		"code": "VI",
		"flag": "demo/res/img/vi.png"
	},
	{
		"name": "Wallis and Futuna",
		"code": "WF",
		"flag": ""
	},
	{
		"name": "Western Sahara",
		"code": "EH",
		"flag": "demo/res/img/eh.png"
	},
	{
		"name": "Yemen",
		"code": "YE",
		"flag": "demo/res/img/ye.png"
	},
	{
		"name": "Zambia",
		"code": "ZM",
		"flag": "demo/res/img/zm.png"
	},
	{
		"name": "Zimbabwe",
		"code": "ZW",
		"flag": "demo/res/img/zw.png"
	}
];

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_cmp__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_cmp__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__native_cmp__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__completer_cmp_md__ = __webpack_require__(728);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_9__src__["Ng2CompleterModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["MaterialModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_cmp__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__completer_cmp_md__["a" /* CompleterCmpMd */], __WEBPACK_IMPORTED_MODULE_7__native_cmp__["a" /* NativeCmp */], __WEBPACK_IMPORTED_MODULE_6__material_cmp__["a" /* MaterialCmp */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_cmp__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var template = __webpack_require__(923);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "demo-app",
        template: template
    })
], AppComponent);



/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_cmp__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_cmp__ = __webpack_require__(498);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var appRoutes = [
    {
        path: "",
        redirectTo: "/native",
        pathMatch: "full"
    },
    {
        path: "native",
        component: __WEBPACK_IMPORTED_MODULE_2__native_cmp__["a" /* NativeCmp */]
    },
    {
        path: "material",
        component: __WEBPACK_IMPORTED_MODULE_1__material_cmp__["a" /* MaterialCmp */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_globals__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterCmpMd; });

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CompleterCmpMd; }),
    multi: true
};
var CompleterCmpMd = (function () {
    function CompleterCmpMd() {
        this.inputName = "";
        this.pause = __WEBPACK_IMPORTED_MODULE_3__src_globals__["b" /* PAUSE */];
        this.minSearchLength = __WEBPACK_IMPORTED_MODULE_3__src_globals__["a" /* MIN_SEARCH_LENGTH */];
        this.maxChars = __WEBPACK_IMPORTED_MODULE_3__src_globals__["d" /* MAX_CHARS */];
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.clearSelected = false;
        this.placeholder = "";
        this.textSearching = __WEBPACK_IMPORTED_MODULE_3__src_globals__["e" /* TEXT_SEARCHING */];
        this.textNoResults = __WEBPACK_IMPORTED_MODULE_3__src_globals__["f" /* TEXT_NORESULTS */];
        this.autoMatch = false;
        this.disableInput = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.displaySearching = true;
        this.searchStr = "";
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(CompleterCmpMd.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmpMd.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmpMd.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmpMd.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmpMd.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmpMd.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
            if (item) {
                _this._onChangeCallback(item.title);
            }
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        if (this.textSearching === "false") {
            this.displaySearching = false;
        }
    };
    CompleterCmpMd.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
    };
    return CompleterCmpMd;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "dataService", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "inputName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "pause", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "minSearchLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "maxChars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "overrideSuggested", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "fillHighlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "clearSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CompleterCmpMd.prototype, "matchClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "textSearching", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "textNoResults", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CompleterCmpMd.prototype, "fieldTabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "autoMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "disableInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CompleterCmpMd.prototype, "blur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__src__["CtrCompleter"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__src__["CtrCompleter"])
], CompleterCmpMd.prototype, "completer", void 0);
CompleterCmpMd = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "ng2-completer-md",
        template: __webpack_require__(925),
        styles: [__webpack_require__(924)],
        providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], CompleterCmpMd);



/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var CustomData = (function (_super) {
    __extends(CustomData, _super);
    function CustomData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    CustomData.prototype.search = function (term) {
        var _this = this;
        this.http.get("http://mysafeinfo.com/api/data?list=seinfeldepisodes&format=json&nm=" + term + ",contains")
            .map(function (res) {
            // Convert the result to CompleterItem[]
            var data = res.json();
            var matches = data.map(function (episode) {
                return {
                    title: episode.nm
                };
            });
            _this.next(matches);
        })
            .subscribe();
    };
    CustomData.prototype.cancel = function () {
        // Handle cancel
    };
    return CustomData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));



/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "        <nav class=\"navbar navbar-dark navbar-static-top bg-inverse\">\n            <a class=\"navbar-brand\" href=\"#\">ng2-completer demo</a>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/native\">JS Native</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/material\">Material Design</a>\n                </li>\n            </ul>\n        </nav>\n<div class=\"container main\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = ".completer-row {\n    display: inherit;\n}\n\n.completer-selected-row {\n    background-color: lightblue;\n    color: #ffffff;\n}\n\n.completer-row p {\n    position: relative;\n    top: 50%;\n    transform: translateY(50%);\n}\n\n.completer-dropdown-holder {\n    position: absolute;\n    background: white;\n}"

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports = "<div class=\"completer-holder\" ctrCompleter>\n    <md-input class=\"completer-input\" ctrInput=\"clearSelected=clearSelected; overrideSuggested=overrideSuggested; fillHighlighted=fillHighlighted\" [(ngModel)]=\"searchStr\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\" [attr.maxlength]=\"maxChars\"\n        [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" (blur)=\"onBlur()\"\n        autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\">\n    </md-input>\n\n    <div class=\"completer-dropdown-holder\" *ctrList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; let items = results; let searchActive = searching; let isInitialized = searchInitialized;\">\n        <md-list class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized\">\n            <md-list-item *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{textSearching}}</md-list-item>\n            <md-list-item *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{textNoResults}}</md-list-item>\n            <md-list-item class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                    <span *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                        <img md-list-avatar *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                        <span md-list-avatar *ngIf=\"item.image === ''\" class=\"completer-image-default\"></span>\n                    </span>\n                    <p md-line>\n                        <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                        <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                            [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                        </completer-list-item>\n                    </p>\n                </div>\n            </md-list-item>\n        </md-list>\n    </div>\n</div>"

/***/ }),

/***/ 926:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1>Completer Material</h1>\n    <p>This is a demo of a custom component that uses Ng2-Completer directives to create a material2 autocomplete component.</p>\n    <p>To use this compnent copy all completer-cmp-md files from the demo code</p>\n</div>\n<h2>Local data with image</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of countries - using image, matchClass and maxLength</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer-md [(ngModel)]=\"countryName\" [dataService]=\"dataService\" [minSearchLength]=\"0\" [maxChars]=\"4\" [placeholder]=\"'search country'\"\n                [matchClass]=\"'match'\">\n            </ng2-completer-md>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 927:
/***/ (function(module, exports) {

module.exports = "/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 5rem;\n}\n\n.completer-wrapper {\n    border-radius: 25px;\n    background: lightgray;\n}\n\n:host >>> .match {\n  color: orangered;\n}\n\n:host >>> .my-input-class {\n  color: #2e405b;\n}\n\n.completer-limit /deep/ .completer-dropdown {\n  overflow-y: auto;\n  max-height: 20rem;\n}"

/***/ }),

/***/ 928:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1>Completer Native</h1>\n</div>\n<h2>Local data with image</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of countries - using image, matchClass, maxLength, autofocus and limit of the dropdown length in CSS</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer class=\"completer-limit\" [(ngModel)]=\"countryName\" [dataService]=\"dataService\" [minSearchLength]=\"0\"\n                [maxChars]=\"4\" [placeholder]=\"'search country'\" [matchClass]=\"'match'\" [autofocus]=\"true\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName}}</p>\n        </div>\n    </div>\n</div>\n<h2>Local data with description</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of quotes - using desription, textNoResults, matchClass and\n                selected event</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [dataService]=\"dataService2\" (selected)=\"onQuoteSelected($event)\"\n                [minSearchLength]=\"0\" [placeholder]=\"'search quote by author name'\" [textNoResults]=\"'No quotes found'\"\n                [matchClass]=\"'match'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Quote: {{quote}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Remote data</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Remote data of countries with minSearchLength, textSearching and clearSelected</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [dataService]=\"dataRemote\" [minSearchLength]=\"3\" [placeholder]=\"'search country'\"\n                [clearSelected]=\"true\" (selected)=\"onCountrySelected($event)\" [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName2}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Input disabled</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Async local data of countries - overrideSuggested, inputDisabled, inputClass and\n                fieldTabindex\n            </p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"countryName3\" [dataService]=\"dataService3\" [minSearchLength]=\"0\"\n                [placeholder]=\"'search country'\" [overrideSuggested]=\"true\" [disableInput]=\"searchcb\"\n                [fieldTabindex]=\"-1\" [inputClass]=\"'my-input-class'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected: {{countryName3}}</p>\n        </div>\n        <div class=\"row\">\n            <label>Disable search</label>\n            <input type=\"checkbox\" [(ngModel)]=\"searchcb\" />\n        </div>\n    </div>\n</div>\n\n<h2>Automatch</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <form>\n            <div class=\"row\">\n                <p>Local data of countries - autoMatch and required</p>\n            </div>\n            <div class=\"row\">\n                <ng2-completer name=\"countryRequired\" [dataService]=\"dataService4\" [(ngModel)]=\"countryName4\"\n                    [minSearchLength]=\"0\" [placeholder]=\"'search country'\" #countryRequired=\"ngModel\"\n                    [autoMatch]=\"true\" required>\n                </ng2-completer>\n                <div [hidden]=\"countryRequired.valid\" class=\"col-md-6 alert alert-danger\">\n                    Country is required\n                </div>\n            </div>\n            <div class=\"row\">\n                <p>Selected: {{countryName4}}</p>\n            </div>\n        </form>\n    </div>\n</div>\n\n<h2>Remote data with URL Formater and Headers</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Remote data from <a href=\"https://developers.google.com/maps/documentation/geocoding/start\">Google Maps API</a> - urlFormater, dataField, and headers</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"countryName5\" [dataService]=\"dataRemote2\" [minSearchLength]=\"3\"\n                [placeholder]=\"'search country'\" [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName5}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Custom data provider</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Custom data provider. Seinfeld episodes data from <a href=\"https://mysafeinfo.com/\">mysafeinfo.com</a></p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"seinfeldEpisode\" [dataService]=\"customData\" [minSearchLength]=\"3\"\n                [placeholder]=\"'search Seinfeld episode'\" [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected episode: {{seinfeldEpisode}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Open and close programmatically</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of countries open and close from code</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <ng2-completer #openCloseExample  [(ngModel)]=\"countryName6\" [dataService]=\"dataService5\" [minSearchLength]=\"0\" [placeholder]=\"'search country'\">\n                </ng2-completer>\n            </div>\n            <div class=\"col-md-1\">\n                <button (click)=\"onOpen()\">open</button>\n            </div>\n            <div class=\"col-md-1\">\n                <button (click)=\"onClose()\">close</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName6}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Do not set input value when item is highlighted</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Remote data of countries with minSearchLength, textSearching and fillHighlighted=false</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [dataService]=\"dataNoFill\" [minSearchLength]=\"1\" [placeholder]=\"'search country'\"\n                           [fillHighlighted]=\"false\" (selected)=\"onCountrySelected($event)\" [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName2}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_completer__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRowItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CtrDropdown; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());

var CtrDropdown = (function () {
    function CtrDropdown(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    CtrDropdown.prototype.ngOnInit = function () {
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === "auto";
    };
    CtrDropdown.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    CtrDropdown.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    CtrDropdown.prototype.highlightRow = function (index) {
        var highlited = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlited) {
                this.currHighlited.row.setHighlited(false);
            }
            this.currHighlited = undefined;
            this.completer.onHighlighted(null);
            return;
        }
        if (!highlited) {
            return;
        }
        if (this.currHighlited) {
            this.currHighlited.row.setHighlited(false);
        }
        this.currHighlited = highlited;
        this.currHighlited.row.setHighlited(true);
        this.completer.onHighlighted(this.currHighlited.row.getDataItem());
    };
    CtrDropdown.prototype.clear = function () {
        this.rows = [];
    };
    CtrDropdown.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    CtrDropdown.prototype.selectCurrent = function () {
        if (this.currHighlited) {
            this.onSelected(this.currHighlited.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    CtrDropdown.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlited) {
            nextRowIndex = this.currHighlited.index + 1;
        }
        this.highlightRow(nextRowIndex);
        if (this.isScrollOn && this.currHighlited) {
            var row = this.currHighlited.row.getNativeElement();
            if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
            }
        }
    };
    CtrDropdown.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlited) {
            nextRowIndex = this.currHighlited.index - 1;
        }
        this.highlightRow(nextRowIndex);
        if (this.isScrollOn && this.currHighlited) {
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
        }
    };
    CtrDropdown.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    CtrDropdown.prototype.dropdownRowTop = function () {
        return this.currHighlited.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    CtrDropdown.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    CtrDropdown.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row);
        return row.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    return CtrDropdown;
}());
CtrDropdown = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "[ctrDropdown]",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ctr_completer__["a" /* CtrCompleter */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], CtrDropdown);



/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterBaseData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var CompleterBaseData = (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    CompleterBaseData.prototype.cancel = function () { };
    CompleterBaseData.prototype.searchFieldss = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var _this = this;
        var matches = [];
        var searchFields = this._searchFields ? this._searchFields.split(",") : null;
        if (term != "") {
            matches = data.filter(function (item) {
                var values = searchFields ? searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(",")
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .join(" ");
    };
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var keys;
        var result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    CompleterBaseData.prototype.processResults = function (matches) {
        var i;
        var description = "";
        var image = null;
        var formattedText;
        var formattedDesc;
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                if (this._titleField) {
                    formattedText = this.extractTitle(matches[i]);
                }
                else {
                    formattedText = matches[i];
                }
                if (this._descriptionField) {
                    description = formattedDesc = this.extractValue(matches[i], this._descriptionField);
                }
                if (this._imageField) {
                    image = this.extractValue(matches[i], this._imageField);
                }
                results.push({
                    title: formattedText,
                    description: formattedDesc,
                    image: image,
                    originalObject: matches[i]
                });
            }
        }
        return results;
    };
    return CompleterBaseData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));



/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completer_base_data__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    LocalData.prototype.data = function (data) {
        var _this = this;
        if (data instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) {
            data.subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
            });
        }
        else {
            this._data = data;
        }
        return this;
    };
    LocalData.prototype.search = function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    return LocalData;
}(__WEBPACK_IMPORTED_MODULE_2__completer_base_data__["a" /* CompleterBaseData */]));
LocalData = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalData);



/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_base_data__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var RemoteData = (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this._urlFormater = null;
        _this._dataField = null;
        return _this;
    }
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    };
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        var url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http.get(url, { headers: this._headers || new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var matchaes = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matchaes, term);
        })
            .map(function (matches) {
            var results = _this.processResults(matches);
            _this.next(results);
            return results;
        })
            .catch(function (err) {
            _this.error(err);
            return null;
        })
            .subscribe();
    };
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    return RemoteData;
}(__WEBPACK_IMPORTED_MODULE_3__completer_base_data__["a" /* CompleterBaseData */]));



/***/ })

},[1184]);