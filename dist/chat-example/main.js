(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/authentication/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/components/login/login.component */ "./src/app/authentication/components/login/login.component.ts");
/* harmony import */ var _authentication_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/components/registration/registration.component */ "./src/app/authentication/components/registration/registration.component.ts");







var routes = [
    { path: '', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'registration', component: _authentication_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/services/chat.service */ "./src/app/chat/services/chat.service.ts");
/* harmony import */ var _chat_components_user_list_services_user_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/components/user-list/services/user-list.service */ "./src/app/chat/components/user-list/services/user-list.service.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/components/login/login.component */ "./src/app/authentication/components/login/login.component.ts");
/* harmony import */ var _authentication_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/components/registration/registration.component */ "./src/app/authentication/components/registration/registration.component.ts");
/* harmony import */ var _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masthead/masthead.component */ "./src/app/masthead/masthead.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _chat_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/components/user-list/user-list.component */ "./src/app/chat/components/user-list/user-list.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                _authentication_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _authentication_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_12__["MastheadComponent"],
                _chat_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"]
            ],
            providers: [_chat_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"], _chat_components_user_list_services_user_list_service__WEBPACK_IMPORTED_MODULE_8__["UserListService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _chat_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat/services/chat.service */ "./src/app/chat/services/chat.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var env = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, chatService) {
        this.http = http;
        this.chatService = chatService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var data = JSON.stringify({ 'username': username, 'password': password });
        var headers = { headers: { 'Content-Type': 'application/json' } };
        return this.http.post(env.apiUrl + '/login', data, headers).toPromise()
            .then(function (res) { return _this.validateLogin(res); });
    };
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        var data = JSON.stringify({ 'username': username, 'password': password });
        var headers = { headers: { 'Content-Type': 'application/json' } };
        return this.http.post(env.apiUrl + '/register', data, headers).toPromise()
            .then(function (res) { return _this.validateLogin(res); });
    };
    AuthenticationService.prototype.validateLogin = function (res) {
        if (res != false) {
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.currentUserSubject.next(res);
        }
        return res;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.chatService.sendLogoutMessage(this.currentUserValue);
        this.currentUserSubject.next(null);
        window.location.reload();
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _chat_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/authentication/components/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"login-panel\">\n    <h2>Login</h2>\n    <input type = \"text\" [(ngModel)]=\"username\" placeholder=\"Username\">\n    <input type = \"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\n    <div class = \"button-wrapper-broad\">\n        <button class = \"login-button\" (click)=\"login()\">Login</button>\n    </div>\n    <button (click) = \"toRegistration()\">Click here to register</button>\n</div>\n<div *ngIf= \"error\" class = \"error\">{{this.error}}</div>"

/***/ }),

/***/ "./src/app/authentication/components/login/login.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-panel {\n  padding: 30px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.login-panel input {\n  width: 100%;\n}\n.login-panel .login-button {\n  margin: 0 auto;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWwvVW5pL1NlbWVzdGVyNi9DbG91ZC9jaGF0LWV4YW1wbGUtY2xpZW50L3NyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSjtBREpBO0VBTVEsV0FBQTtBQ0NSO0FEUEE7RUFVUSxjQUFBO0VBQ0EsY0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYW5lbCB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn0iLCIubG9naW4tcGFuZWwge1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5sb2dpbi1wYW5lbCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLXBhbmVsIC5sb2dpbi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/components/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/authentication/components/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.username, this.password)
            .then(function (res) { return _this.loginRedirect(res); });
    };
    LoginComponent.prototype.loginRedirect = function (res) {
        if (res != false) {
            this.router.navigate(["/"]);
        }
        else {
            this.error = "Login failed!";
        }
    };
    LoginComponent.prototype.toRegistration = function () {
        this.router.navigate(["/registration"]);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/authentication/components/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/registration/registration.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/authentication/components/registration/registration.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"registration-panel\">\n    <h2>Registration</h2>\n    <input type = \"text\" [(ngModel)]=\"username\" placeholder=\"Username\">\n    <input type = \"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\n    <input type = \"password\" [(ngModel)]=\"password_repeat\" placeholder=\"Repeat password\">\n    <div class = \"button-wrapper-broad\">\n        <button class = \"registration-button\" (click)=\"register()\">Register</button>\n    </div>\n    <a href=\"/login\">Click here to login.</a>\n</div>\n<div *ngIf= \"error\" class = \"error\">{{error}}</div>\n"

/***/ }),

/***/ "./src/app/authentication/components/registration/registration.component.less":
/*!************************************************************************************!*\
  !*** ./src/app/authentication/components/registration/registration.component.less ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-panel {\n  padding: 30px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.registration-panel input {\n  width: 100%;\n}\n.registration-panel .registration-button {\n  margin: 0 auto;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWwvVW5pL1NlbWVzdGVyNi9DbG91ZC9jaGF0LWV4YW1wbGUtY2xpZW50L3NyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURKQTtFQU1RLFdBQUE7QUNDUjtBRFBBO0VBVVEsY0FBQTtFQUNBLGNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24tcGFuZWwge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdHJhdGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufSIsIi5yZWdpc3RyYXRpb24tcGFuZWwge1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5yZWdpc3RyYXRpb24tcGFuZWwgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3RyYXRpb24tcGFuZWwgLnJlZ2lzdHJhdGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/components/registration/registration.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/authentication/components/registration/registration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        if (this.password != this.password_repeat) {
            this.error = "Passwords do not match!";
        }
        else if (this.username.length < 1) {
            this.error = "Please enter a username!";
        }
        else if (this.username.length > 20) {
            this.error = "Your username can't be longer than 20 characters!";
        }
        else if (this.username.includes(";") || this.username.includes(" ")) {
            this.error = "Username can't contain 'spaces' or ';'!";
        }
        else {
            this.auth.register(this.username, this.password).then(function (res) { return _this.registerRedirect(res); });
        }
    };
    RegistrationComponent.prototype.registerRedirect = function (res) {
        if (res != false) {
            this.router.navigate(["/"]);
        }
        else {
            this.error = "Registration failed!";
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/authentication/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.less */ "./src/app/authentication/components/registration/registration.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-masthead></app-masthead>\n<div class = \"main-content\">\n    <div class = \"left\">\n        <app-user-list></app-user-list>\n    </div>\n    <div class = \"right\">\n        <div class = \"messages\">\n            <div class = \"message\" *ngFor=\"let message of messages\">\n                <span class = \"username\" *ngIf=\"message.type != 'server';\">{{message.username}}</span>\n                <span class = \"receiving-users\" *ngIf=\"message.type == 'message' || message.type == 'filemessage';\"><span class = \"to\">to</span><span class = \"received-user\" *ngFor=\"let user of message.users\">{{user}}</span>\n                </span>\n                <span class = \"payload\">{{message.payload}}</span>\n                <a class = \"filelink\" *ngIf=\"message.type == 'filebroadcast' || message.type == 'filemessage';\" href= \"{{message.filelink}}\">{{message.filename}}</a>\n                <span class = \"timestamp\" *ngIf=\"message.type != 'server';\">{{message.timestamp}}</span>\n            </div>\n        </div>\n        \n        <div class = \"bottom\">\n            <input [(ngModel)]=\"message\" (keyup)=\"$event.keyCode == 13 && sendMessage()\" />\n            <button (click)=\"sendMessage()\">Send</button>\n            <input id=\"photo\" type=\"file\" />\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.less":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  display: flex;\n}\n.main-content .left {\n  width: 20%;\n}\n.main-content .right {\n  width: 80%;\n}\n.main-content .right .messages {\n  width: 100%;\n  overflow-y: auto;\n}\n.main-content .right .messages .message {\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #c3c3c3;\n  margin-bottom: 5px;\n}\n.main-content .right .messages .message .username {\n  padding-right: 5px;\n}\n.main-content .right .messages .message .timestamp {\n  float: right;\n}\n.main-content .right .messages .message .receiving-users .to {\n  margin-right: 5px;\n}\n.main-content .right .messages .message .receiving-users .received-user {\n  margin-right: 5px;\n}\n.main-content .right .messages .message .payload,\n.main-content .right .messages .message .filelink {\n  margin-right: 5px;\n}\n.main-content .right .bottom {\n  width: 100%;\n  height: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWwvVW5pL1NlbWVzdGVyNi9DbG91ZC9jaGF0LWV4YW1wbGUtY2xpZW50L3NyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURGQTtFQUlRLFVBQUE7QUNDUjtBRExBO0VBT1EsVUFBQTtBQ0NSO0FEUkE7RUFVWSxXQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRFpBO0VBY2dCLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ2hCO0FEbEJBO0VBb0JvQixrQkFBQTtBQ0NwQjtBRHJCQTtFQXdCb0IsWUFBQTtBQ0FwQjtBRHhCQTtFQTZCd0IsaUJBQUE7QUNGeEI7QUQzQkE7RUFpQ3dCLGlCQUFBO0FDSHhCO0FEOUJBOztFQXVDb0IsaUJBQUE7QUNMcEI7QURsQ0E7RUE0Q1ksV0FBQTtFQUNBLFlBQUE7QUNQWiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAubGVmdCB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICAgIC5yaWdodCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgICAgIC51c2VybmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGltZXN0YW1wIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yZWNlaXZpbmctdXNlcnMge1xuICAgICAgICAgICAgICAgICAgICAudG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucmVjZWl2ZWQtdXNlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAuZmlsZWxpbmsge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLWNvbnRlbnQgLmxlZnQge1xuICB3aWR0aDogMjAlO1xufVxuLm1haW4tY29udGVudCAucmlnaHQge1xuICB3aWR0aDogODAlO1xufVxuLm1haW4tY29udGVudCAucmlnaHQgLm1lc3NhZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubWFpbi1jb250ZW50IC5yaWdodCAubWVzc2FnZXMgLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbi1jb250ZW50IC5yaWdodCAubWVzc2FnZXMgLm1lc3NhZ2UgLnVzZXJuYW1lIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLm1haW4tY29udGVudCAucmlnaHQgLm1lc3NhZ2VzIC5tZXNzYWdlIC50aW1lc3RhbXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ubWFpbi1jb250ZW50IC5yaWdodCAubWVzc2FnZXMgLm1lc3NhZ2UgLnJlY2VpdmluZy11c2VycyAudG8ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYWluLWNvbnRlbnQgLnJpZ2h0IC5tZXNzYWdlcyAubWVzc2FnZSAucmVjZWl2aW5nLXVzZXJzIC5yZWNlaXZlZC11c2VyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubWFpbi1jb250ZW50IC5yaWdodCAubWVzc2FnZXMgLm1lc3NhZ2UgLnBheWxvYWQsXG4ubWFpbi1jb250ZW50IC5yaWdodCAubWVzc2FnZXMgLm1lc3NhZ2UgLmZpbGVsaW5rIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubWFpbi1jb250ZW50IC5yaWdodCAuYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/chat/services/chat.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, http) {
        this.chatService = chatService;
        this.http = http;
        this.messages = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: "http://localhost:3000/upload",
            itemAlias: 'photo',
            removeAfterUpload: true,
            autoUpload: false });
    }
    ChatComponent.prototype.sendMessage = function () {
        var inputEl = jquery__WEBPACK_IMPORTED_MODULE_3__('#photo')[0];
        var fileCount = inputEl.files.length;
        if (fileCount > 0) { // a file was selected
            this.upload(inputEl);
        }
        else {
            this.chatService.sendMessage(this.message);
            this.message = '';
        }
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.sendLoginMessage();
        this.chatService
            .getMessages()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
        };
    };
    ChatComponent.prototype.onFileChange = function (event) {
        if (event.target.files && event.target.files.length) {
            this.files = event.target.files;
        }
    };
    ChatComponent.prototype.upload = function (inputEl) {
        var formData = new FormData();
        formData.append('message', this.message);
        formData.append('photo', inputEl.files.item(0));
        jquery__WEBPACK_IMPORTED_MODULE_3__('#photo')[0].value = "";
        this.chatService.sendFile(formData);
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.less */ "./src/app/chat/chat.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/components/user-list/services/user-list.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/chat/components/user-list/services/user-list.service.ts ***!
  \*************************************************************************/
/*! exports provided: UserListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListService", function() { return UserListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





var env = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
var UserListService = /** @class */ (function () {
    function UserListService() {
        var _this = this;
        this.url = env.apiUrl;
        this.users = [];
        this.getUsers = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('user update', function (userlist) {
                    observer.next(_this.setUserList(userlist.users));
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    UserListService.prototype.setUserList = function (users) {
        var newUsers = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            var isSelected = false;
            if (user != JSON.parse(localStorage.getItem("currentUser")).username) {
                for (var _a = 0, _b = this.users; _a < _b.length; _a++) {
                    var oldUser = _b[_a];
                    if (oldUser.username == user)
                        isSelected = oldUser.isSelected;
                }
                newUsers.push({ "username": user, "isSelected": isSelected });
            }
        }
        this.users = newUsers;
        return this.users;
    };
    UserListService.prototype.clickUser = function ($event) {
        var username = $event.currentTarget.dataset.username;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username == username)
                user.isSelected = !user.isSelected;
        }
        return this.users;
    };
    UserListService.prototype.getSelectedUsers = function () {
        var ret = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.isSelected)
                ret.push(user.username);
        }
        return ret;
    };
    UserListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserListService);
    return UserListService;
}());



/***/ }),

/***/ "./src/app/chat/components/user-list/user-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/chat/components/user-list/user-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"user-list\">\n    <div class = \"user-label\" *ngFor=\"let user of users\"\n        [attr.data-username] = \"user.username\"\n        (click)=\"clickUser($event)\"\n        [ngClass]=\"{'selected' : user.isSelected}\"\n        class = \"user-label\">{{user.username}}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/chat/components/user-list/user-list.component.less":
/*!********************************************************************!*\
  !*** ./src/app/chat/components/user-list/user-list.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-list {\n  padding-right: 5px;\n  max-height: 100vh;\n}\n.user-list .user-label {\n  background-color: #c3c3c3;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n}\n.user-list .user-label.selected {\n  background-color: #7d7d7d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWwvVW5pL1NlbWVzdGVyNi9DbG91ZC9jaGF0LWV4YW1wbGUtY2xpZW50L3NyYy9hcHAvY2hhdC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FESEE7RUFLUSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1saXN0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG5cbiAgICAudXNlci1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iLCIudXNlci1saXN0IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cbi51c2VyLWxpc3QgLnVzZXItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2MzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udXNlci1saXN0IC51c2VyLWxhYmVsLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/components/user-list/user-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chat/components/user-list/user-list.component.ts ***!
  \******************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user-list.service */ "./src/app/chat/components/user-list/services/user-list.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userlistservice) {
        this.userlistservice = userlistservice;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userlistservice.getUsers().subscribe(function (users) {
            _this.setUserList(users);
        });
        ;
    };
    UserListComponent.prototype.setUserList = function (users) {
        this.users = users;
    };
    UserListComponent.prototype.clickUser = function ($event) {
        this.users = this.userlistservice.clickUser($event);
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/chat/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.less */ "./src/app/chat/components/user-list/user-list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/chat/services/chat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/chat/services/chat.service.ts ***!
  \***********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _components_user_list_services_user_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user-list/services/user-list.service */ "./src/app/chat/components/user-list/services/user-list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var env = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
var ChatService = /** @class */ (function () {
    function ChatService(userlistservice, http) {
        var _this = this;
        this.userlistservice = userlistservice;
        this.http = http;
        this.url = env.apiUrl;
        this.getMessages = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('new broadcast', function (message) {
                    observer.next(message);
                });
                _this.socket.on('new message', function (message) {
                    observer.next(message);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    ChatService.prototype.sendMessage = function (message) {
        var selectedUsers = this.userlistservice.getSelectedUsers();
        if (selectedUsers.length > 0) {
            var messageData = {
                "message": message,
                "username": JSON.parse(localStorage.getItem("currentUser")).username,
                "selectedUsers": selectedUsers
            };
            this.socket.emit('chat message', messageData);
        }
        else {
            var messageData = {
                "message": message,
                "username": JSON.parse(localStorage.getItem("currentUser")).username,
                "selectedUsers": []
            };
            this.socket.emit('chat broadcast', messageData);
        }
    };
    ChatService.prototype.sendLoginMessage = function () {
        var username = JSON.parse(localStorage.getItem("currentUser")).username;
        var messageData = {
            "message": username +
                " entered the chatroom.",
            "username": username
        };
        this.socket.emit('chat login', messageData);
    };
    ChatService.prototype.sendLogoutMessage = function (user) {
        var username = user.username;
        var messageData = {
            "message": username +
                " exited the chatroom.",
            "username": username
        };
        this.socket.emit('chat logout', messageData);
    };
    ChatService.prototype.sendFile = function (formData) {
        var selectedUsers = this.userlistservice.getSelectedUsers();
        formData.append("selectedUsers", selectedUsers.join(";"));
        formData.append("username", JSON.parse(localStorage.getItem("currentUser")).username);
        this.http
            .post("http://localhost:3000/upload", formData, { responseType: 'text' }).toPromise()
            .then(function (res) { return console.log(res); });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_components_user_list_services_user_list_service__WEBPACK_IMPORTED_MODULE_4__["UserListService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/masthead/masthead.component.html":
/*!**************************************************!*\
  !*** ./src/app/masthead/masthead.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"masthead\">\n  <div *ngIf=\"loggedin\">\n    <span>Logged in as </span>\n    <span>{{user.username}}</span>\n    <button (click)=\"logout()\">Logout</button>\n  </div>\n  <div *ngIf=\"loggedin == false\">\n    <span>Not logged in</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/masthead/masthead.component.less":
/*!**************************************************!*\
  !*** ./src/app/masthead/masthead.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWwvVW5pL1NlbWVzdGVyNi9DbG91ZC9jaGF0LWV4YW1wbGUtY2xpZW50L3NyYy9hcHAvbWFzdGhlYWQvbWFzdGhlYWQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21hc3RoZWFkL21hc3RoZWFkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWFzdGhlYWQvbWFzdGhlYWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGhlYWQge1xuICAgIHBhZGRpbmc6IDVweDtcbn0iLCIubWFzdGhlYWQge1xuICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/masthead/masthead.component.ts":
/*!************************************************!*\
  !*** ./src/app/masthead/masthead.component.ts ***!
  \************************************************/
/*! exports provided: MastheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastheadComponent", function() { return MastheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MastheadComponent = /** @class */ (function () {
    function MastheadComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    MastheadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.currentUserValue != undefined) {
            this.updateUser(this.auth.currentUserValue);
        }
        this.auth.currentUser.subscribe({
            next: function (userValue) { return _this.updateUser(userValue); }
        });
    };
    MastheadComponent.prototype.logout = function () {
        this.auth.logout();
    };
    MastheadComponent.prototype.updateUser = function (userValue) {
        if (userValue != undefined) {
            this.loggedin = true;
            this.user = userValue;
        }
        else {
            this.loggedin = false;
        }
    };
    MastheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-masthead',
            template: __webpack_require__(/*! ./masthead.component.html */ "./src/app/masthead/masthead.component.html"),
            styles: [__webpack_require__(/*! ./masthead.component.less */ "./src/app/masthead/masthead.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MastheadComponent);
    return MastheadComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://cloud-chat.eu-de.mybluemix.net/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paul/Uni/Semester6/Cloud/chat-example-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map