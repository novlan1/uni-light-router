(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Router"] = factory();
	else
		root["Router"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/config.ts":
/*!*******************************!*\
  !*** ./src/helpers/config.ts ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export baseConfig [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lifeCycle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mpPlatformReg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export proxyHookDeps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export proxyHookName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.proxyHookName = exports.proxyHookDeps = exports.lifeCycle = exports.baseConfig = exports.mpPlatformReg = void 0;
var warn_1 = __webpack_require__(/*! ./warn */ "./src/helpers/warn.ts");
var query_1 = __webpack_require__(/*! ../public/query */ "./src/public/query.ts");
exports.mpPlatformReg = '(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)'; // 小程序下不能直接导出正则 需要重新组装成正则 不然bug一推 诡异
exports.baseConfig = {
    h5: {
        paramsToQuery: false,
        vueRouterDev: false,
        vueNext: false,
        mode: 'hash',
        base: '/',
        linkActiveClass: 'router-link-active',
        linkExactActiveClass: 'router-link-exact-active',
        scrollBehavior: function (to, from, savedPostion) { return ({ x: 0, y: 0 }); },
        fallback: true
    },
    APP: {
        registerLoadingPage: true,
        loadingPageStyle: function () { return JSON.parse('{"backgroundColor":"#FFF"}'); },
        loadingPageHook: function (view) { view.show(); },
        launchedHook: function () { plus.navigator.closeSplashscreen(); },
        animation: {}
    },
    applet: {
        animationDuration: 300
    },
    beforeProxyHooks: {
        onLoad: function (_a, next, router) {
            var options = _a[0];
            next([query_1.parseQuery({ query: options }, router)]);
        }
    },
    platform: 'h5',
    keepUniOriginNav: false,
    debugger: false,
    routerBeforeEach: function (to, from, next) { next(); },
    routerAfterEach: function (to, from) { },
    routerErrorEach: function (error, router) { router.$lockStatus = false; warn_1.err(error, router, true); },
    detectBeforeLock: function (router, to, navType) { },
    routes: [
        {
            path: '/choose-location'
        },
        {
            path: '/open-location'
        },
        {
            path: '/preview-image'
        }
    ]
};
exports.lifeCycle = {
    beforeHooks: [],
    afterHooks: [],
    routerBeforeHooks: [],
    routerAfterHooks: [],
    routerErrorHooks: []
};
exports.proxyHookDeps = {
    resetIndex: [],
    hooks: {},
    options: {}
};
exports.proxyHookName = [
    'onLaunch',
    'onShow',
    'onHide',
    'onError',
    'onInit',
    'onLoad',
    'onReady',
    'onUnload',
    'onResize',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed'
];


/***/ }),

/***/ "./src/helpers/createRouteMap.ts":
/*!***************************************!*\
  !*** ./src/helpers/createRouteMap.ts ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createRouteMap [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRouteMap = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/helpers/utils.ts");
function createRouteMap(router, routes) {
    var routesMap = {
        finallyPathList: [],
        finallyPathMap: Object.create(null),
        aliasPathMap: Object.create(null),
        pathMap: Object.create(null),
        vueRouteMap: Object.create(null),
        nameMap: Object.create(null)
    };
    routes.forEach(function (route) {
        var _a = utils_1.getRoutePath(route, router), finallyPath = _a.finallyPath, aliasPath = _a.aliasPath, path = _a.path;
        if (path == null) {
            var error = 'error';
            throw new Error(error);
        }
        if (finallyPath instanceof Array) {
            if (!router.options.h5.vueRouterDev && router.options.platform === 'h5') {
                var error = 'error';
                throw new Error(error);
            }
        }
        var strFinallyPath = finallyPath;
        var strAliasPath = aliasPath;
        if (router.options.platform !== 'h5') {
            if (strFinallyPath.indexOf('/') !== 0 && path !== '*') {
            }
        }
        if (!routesMap.finallyPathMap[strFinallyPath]) {
            routesMap.finallyPathMap[strFinallyPath] = route;
            routesMap.aliasPathMap[strAliasPath] = route;
            routesMap.pathMap[path] = route;
            routesMap.finallyPathList.push(strFinallyPath);
            if (route.name != null) {
                routesMap.nameMap[route.name] = route;
            }
        }
    });
    return routesMap;
}
exports.createRouteMap = createRouteMap;


/***/ }),

/***/ "./src/helpers/lifeCycle.ts":
/*!**********************************!*\
  !*** ./src/helpers/lifeCycle.ts ***!
  \**********************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export registerEachHooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export registerHook [provided] [no usage info] [missing usage info prevents renaming] */
/*! export registerRouterHooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerEachHooks = exports.registerRouterHooks = exports.registerHook = void 0;
var base_1 = __webpack_require__(/*! ../options/base */ "./src/options/base.ts");
var hooks_1 = __webpack_require__(/*! ../public/hooks */ "./src/public/hooks.ts");
function registerHook(list, fn) {
    list[0] = fn;
}
exports.registerHook = registerHook;
function registerRouterHooks(cycleHooks, options) {
    registerHook(cycleHooks.routerBeforeHooks, function (to, from, next) {
        options.routerBeforeEach(to, from, next);
    });
    registerHook(cycleHooks.routerAfterHooks, function (to, from) {
        options.routerAfterEach(to, from);
    });
    registerHook(cycleHooks.routerErrorHooks, function (error, router) {
        options.routerErrorEach(error, router);
    });
    return cycleHooks;
}
exports.registerRouterHooks = registerRouterHooks;
function registerEachHooks(router, hookType, userGuard) {
    registerHook(router.lifeCycle[hookType], function (to, from, next, router, auto) {
        if (auto) { // h5端 vue-router自动触发 非自己调用触发
            hooks_1.onTriggerEachHook(to, from, router, base_1.hookToggle[hookType], next);
        }
        else {
            userGuard(to, from, next);
        }
    });
}
exports.registerEachHooks = registerEachHooks;


/***/ }),

/***/ "./src/helpers/mixins.ts":
/*!*******************************!*\
  !*** ./src/helpers/mixins.ts ***!
  \*******************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initMixins [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initMixins = void 0;
var createRouteMap_1 = __webpack_require__(/*! ../helpers/createRouteMap */ "./src/helpers/createRouteMap.ts");
var registerRouter = false;
var onloadProxyOk = false;
var appletProxy = {
    app: false,
    page: ''
};
function initMixins(Vue, router) {
    var routesMap = createRouteMap_1.createRouteMap(router, router.options.routes);
    router.routesMap = routesMap; // 挂载自身路由表到路由对象下
    // Vue.util.defineReactive(router, '_Route', createRoute(router, 19970806))
}
exports.initMixins = initMixins;


/***/ }),

/***/ "./src/helpers/utils.ts":
/*!******************************!*\
  !*** ./src/helpers/utils.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:14-18 */
/*! CommonJS bailout: this is used directly at 24:22-26 */
/*! CommonJS bailout: this is used directly at 31:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deepDecodeQuery = exports.resolveAbsolutePath = exports.assertParentChild = exports.lockDetectWarn = exports.deepClone = exports.baseClone = exports.assertDeepObject = exports.paramsToQuery = exports.forMatNextToFrom = exports.urlToJson = exports.getUniCachePage = exports.removeSimpleValue = exports.copyData = exports.getDataType = exports.routesForMapRoute = exports.notRouteTo404 = exports.getWildcardRule = exports.assertNewOptions = exports.getRoutePath = exports.notDeepClearNull = exports.mergeConfig = exports.timeOut = exports.def = exports.voidFun = void 0;
var config_1 = __webpack_require__(/*! ../helpers/config */ "./src/helpers/config.ts");
var hooks_1 = __webpack_require__(/*! ../public/hooks */ "./src/public/hooks.ts");
var warn_1 = __webpack_require__(/*! ../helpers/warn */ "./src/helpers/warn.ts");
var methods_1 = __webpack_require__(/*! ../public/methods */ "./src/public/methods.ts");
var path_to_regexp_1 = __importDefault(__webpack_require__(/*! @tencent/t-comm/lib/router/path-to-regexp */ "@tencent/t-comm/lib/router/path-to-regexp"));
// const Regexp = require('path-to-regexp');
function voidFun() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
exports.voidFun = voidFun;
function def(defObject, key, getValue) {
    Object.defineProperty(defObject, key, {
        get: function () {
            return getValue();
        }
    });
}
exports.def = def;
function timeOut(time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, time);
    });
}
exports.timeOut = timeOut;
function mergeConfig(baseConfig, userConfig) {
    var config = Object.create(null);
    var baseConfigKeys = Object.keys(baseConfig).concat(['resolveQuery', 'parseQuery']);
    for (var i = 0; i < baseConfigKeys.length; i += 1) {
        var key = baseConfigKeys[i];
        if (userConfig[key] != null) {
            if (userConfig[key].constructor === Object) {
                config[key] = __assign(__assign({}, baseConfig[key]), userConfig[key]);
            }
            else if (key === 'routes') {
                config[key] = __spreadArrays(baseConfig[key], userConfig[key]);
            }
            else {
                config[key] = userConfig[key];
            }
        }
        else {
            config[key] = baseConfig[key];
        }
    }
    return config;
}
exports.mergeConfig = mergeConfig;
function notDeepClearNull(object) {
    for (var key in object) {
        if (object[key] == null) {
            delete object[key];
        }
    }
    return object;
}
exports.notDeepClearNull = notDeepClearNull;
function getRoutePath(route, router) {
    var finallyPath = route.aliasPath || route.alias || route.path;
    if (router.options.platform !== 'h5') {
        finallyPath = route.path;
    }
    return {
        finallyPath: finallyPath,
        aliasPath: route.aliasPath || route.path,
        path: route.path,
        alias: route.alias
    };
}
exports.getRoutePath = getRoutePath;
function assertNewOptions(options) {
    var _a;
    var platform = options.platform, routes = options.routes;
    if (platform == null) {
        throw new Error("\u4F60\u5728\u5B9E\u4F8B\u5316\u8DEF\u7531\u65F6\u5FC5\u987B\u4F20\u9012 'platform'");
    }
    if (routes == null || routes.length === 0) {
        throw new Error("\u4F60\u5728\u5B9E\u4F8B\u5316\u8DEF\u7531\u65F6\u5FC5\u987B\u4F20\u9012 routes \u4E3A\u7A7A\uFF0C\u8FD9\u662F\u65E0\u610F\u4E49\u7684\u3002");
    }
    if (options.platform === 'h5') {
        if ((_a = options.h5) === null || _a === void 0 ? void 0 : _a.vueRouterDev) {
            config_1.baseConfig.routes = [];
        }
    }
    var mergeOptions = mergeConfig(config_1.baseConfig, options);
    return mergeOptions;
}
exports.assertNewOptions = assertNewOptions;
function getWildcardRule(router, msg) {
    var routesMap = router.routesMap;
    var route = routesMap.finallyPathMap['*'];
    if (route) { // 有写通配符
        return route;
    }
    if (msg) {
        hooks_1.ERRORHOOK[0](msg, router);
    }
    throw new Error("\u5F53\u524D\u8DEF\u7531\u8868\u5339\u914D\u89C4\u5219\u5DF2\u5168\u90E8\u5339\u914D\u5B8C\u6210\uFF0C\u672A\u627E\u5230\u6EE1\u8DB3\u7684\u5339\u914D\u89C4\u5219\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 '*' \u901A\u914D\u7B26\u6355\u6349\u6700\u540E\u7684\u5F02\u5E38");
}
exports.getWildcardRule = getWildcardRule;
function notRouteTo404(router, toRoute, parseToRule, navType) {
    if (toRoute.path !== '*') { // 不是通配符  正常匹配成功
        return toRoute;
    }
    var redirect = toRoute.redirect;
    if (typeof redirect === 'undefined') {
        throw new Error(" *  \u901A\u914D\u7B26\u5FC5\u987B\u914D\u5408 redirect \u4F7F\u7528\u3002redirect: string | Location | Function");
    }
    var newRoute = redirect;
    if (typeof newRoute === 'function') {
        newRoute = newRoute(parseToRule);
    }
    var redirectRule = methods_1.navjump(newRoute, router, navType, undefined, undefined, undefined, false);
    return redirectRule;
}
exports.notRouteTo404 = notRouteTo404;
function routesForMapRoute(router, path, mapArrayKey, deepFind) {
    var _a;
    if (deepFind === void 0) { deepFind = false; }
    if ((_a = router.options.h5) === null || _a === void 0 ? void 0 : _a.vueRouterDev) {
        return { path: path };
    }
    // 【Fixe】 https://github.com/SilurianYang/uni-simple-router/issues/252
    var startPath = path.split('?')[0];
    var wildcard = '';
    var routesMap = router.routesMap;
    for (var i = 0; i < mapArrayKey.length; i++) {
        var mapKey = mapArrayKey[i];
        var mapList = routesMap[mapKey];
        for (var _i = 0, _b = Object.entries(mapList); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            if (key === '*') {
                if (wildcard === '') {
                    wildcard = '*';
                }
                continue;
            }
            var route = value;
            var rule = key;
            if (getDataType(mapList) === '[object Array]') {
                rule = route;
            }
            var pathRule = path_to_regexp_1.default(rule);
            var result = pathRule.exec(startPath);
            if (result != null) {
                if (getDataType(route) === '[object String]') {
                    return routesMap.finallyPathMap[route];
                }
                return route;
            }
        }
    }
    // 【Fixe】 https://github.com/SilurianYang/uni-simple-router/issues/302    2021-8-4 16:38:44
    if (deepFind) {
        return {};
    }
    if (routesMap['aliasPathMap']) {
        var results = routesForMapRoute(router, path, ['aliasPathMap'], true);
        if (Object.keys(results).length > 0) {
            return results;
        }
    }
    if (wildcard !== '') {
        return getWildcardRule(router);
    }
    throw new Error(path + " \u8DEF\u5F84\u65E0\u6CD5\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u5230\uFF01\u68C0\u67E5\u8DF3\u8F6C\u8DEF\u5F84\u53CA\u8DEF\u7531\u8868");
}
exports.routesForMapRoute = routesForMapRoute;
function getDataType(data) {
    return Object.prototype.toString.call(data);
}
exports.getDataType = getDataType;
function copyData(object) {
    return JSON.parse(JSON.stringify(object));
}
exports.copyData = copyData;
function removeSimpleValue(array, value) {
    for (var i = 0; i < array.length; i++) {
        var it_1 = array[i];
        if (it_1 === value) {
            array.splice(i, 1);
            return true;
        }
    }
    return false;
}
exports.removeSimpleValue = removeSimpleValue;
function getUniCachePage(pageIndex) {
    var pages = getCurrentPages();
    if (pageIndex == null) {
        return pages;
    }
    if (pages.length === 0) {
        return pages;
    }
    var page = pages.reverse()[pageIndex];
    if (page == null) {
        return [];
    }
    return page;
}
exports.getUniCachePage = getUniCachePage;
function urlToJson(url) {
    var query = {};
    var _a = url.split('?'), path = _a[0], params = _a[1];
    if (params != null) {
        var parr = params.split('&');
        for (var _i = 0, parr_1 = parr; _i < parr_1.length; _i++) {
            var i = parr_1[_i];
            var arr = i.split('=');
            query[arr[0]] = arr[1];
        }
    }
    return {
        path: path,
        query: query
    };
}
exports.urlToJson = urlToJson;
function forMatNextToFrom(router, to, from) {
    var _a = [to, from], matTo = _a[0], matFrom = _a[1];
    matTo = methods_1.createRoute(router, undefined, deepClone(matTo));
    matFrom = methods_1.createRoute(router, undefined, deepClone(matFrom));
    return {
        matTo: matTo,
        matFrom: matFrom
    };
}
exports.forMatNextToFrom = forMatNextToFrom;
function paramsToQuery(router, toRule) {
    var _a;
    if (router.options.platform === 'h5' && !((_a = router.options.h5) === null || _a === void 0 ? void 0 : _a.paramsToQuery)) {
        return toRule;
    }
    if (getDataType(toRule) === '[object Object]') {
        var _b = toRule, name_1 = _b.name, params = _b.params, moreToRule = __rest(_b, ["name", "params"]);
        var paramsQuery = params;
        if (router.options.platform !== 'h5' && paramsQuery == null) {
            paramsQuery = {};
        }
        if (name_1 != null && paramsQuery != null) {
            var route = router.routesMap.nameMap[name_1];
            if (route == null) {
                route = getWildcardRule(router, { type: 2, msg: "\u547D\u540D\u8DEF\u7531\u4E3A\uFF1A" + name_1 + " \u7684\u8DEF\u7531\uFF0C\u65E0\u6CD5\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u5230\uFF01", toRule: toRule });
            }
            var finallyPath = getRoutePath(route, router).finallyPath;
            if (finallyPath.includes(':')) { // 动态路由无法使用 paramsToQuery
                hooks_1.ERRORHOOK[0]({ type: 2, msg: "\u52A8\u6001\u8DEF\u7531\uFF1A" + finallyPath + " \u65E0\u6CD5\u4F7F\u7528 paramsToQuery\uFF01", toRule: toRule }, router);
            }
            else {
                return __assign(__assign({}, moreToRule), { path: finallyPath, query: paramsQuery });
            }
        }
    }
    return toRule;
}
exports.paramsToQuery = paramsToQuery;
function assertDeepObject(object) {
    var arrMark = null;
    try {
        arrMark = JSON.stringify(object).match(/\{|\[|\}|\]/g);
    }
    catch (error) {
        warn_1.warnLock("\u4F20\u9012\u7684\u53C2\u6570\u89E3\u6790\u5BF9\u8C61\u5931\u8D25\u3002" + error);
    }
    if (arrMark == null) {
        return false;
    }
    if (arrMark.length > 3) {
        return true;
    }
    return false;
}
exports.assertDeepObject = assertDeepObject;
function baseClone(source, target) {
    // 【Fixe】 https://github.com/SilurianYang/uni-simple-router/issues/292
    // 小程序会将null解析为字符串 undefined 建议不要在参数中传递 null
    if (source == null) {
        target = source;
    }
    else {
        for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
            var key = _a[_i];
            var dyKey = key;
            if (source[key] === source)
                continue;
            if (typeof source[key] === 'object') {
                target[dyKey] = getDataType(source[key]) === '[object Array]' ? [] : {};
                target[dyKey] = baseClone(source[key], target[dyKey]);
            }
            else {
                target[dyKey] = source[key];
            }
        }
    }
    return target;
}
exports.baseClone = baseClone;
function deepClone(source) {
    var __ob__ = getDataType(source) === '[object Array]' ? [] : {};
    baseClone(source, __ob__);
    return __ob__;
}
exports.deepClone = deepClone;
function lockDetectWarn(router, to, navType, next, uniActualData, passiveType) {
    if (uniActualData === void 0) { uniActualData = {}; }
    if (passiveType === 'afterHooks') {
        next();
    }
    else {
        var detectBeforeLock = router.options.detectBeforeLock;
        detectBeforeLock && detectBeforeLock(router, to, navType);
        if (router.$lockStatus) {
            router.options.routerErrorEach({
                type: 2,
                msg: '当前页面正在处于跳转状态，请稍后再进行跳转....',
                NAVTYPE: navType,
                uniActualData: uniActualData
            }, router);
        }
        else {
            next();
        }
    }
}
exports.lockDetectWarn = lockDetectWarn;
function assertParentChild(parentPath, vueVim) {
    while (vueVim.$parent != null) {
        var mpPage = vueVim.$parent.$mp;
        if (mpPage.page && mpPage.page.is === parentPath) {
            return true;
        }
        vueVim = vueVim.$parent;
    }
    try {
        if (vueVim.$mp.page.is === parentPath || vueVim.$mp.page.route === parentPath) {
            return true;
        }
    }
    catch (error) {
        return false;
    }
    return false;
}
exports.assertParentChild = assertParentChild;
function resolveAbsolutePath(path, router) {
    var reg = /^\/?([^\?\s]+)(\?.+)?$/;
    var trimPath = path.trim();
    if (!reg.test(trimPath)) {
        throw new Error("\u3010" + path + "\u3011 \u8DEF\u5F84\u9519\u8BEF\uFF0C\u8BF7\u63D0\u4F9B\u5B8C\u6574\u7684\u8DEF\u5F84(10001)\u3002");
    }
    var paramsArray = trimPath.match(reg);
    if (paramsArray == null) {
        throw new Error("\u3010" + path + "\u3011 \u8DEF\u5F84\u9519\u8BEF\uFF0C\u8BF7\u63D0\u4F9B\u5B8C\u6574\u7684\u8DEF\u5F84(10002)\u3002");
    }
    var query = paramsArray[2] || '';
    if (/^\.\/[^\.]+/.test(trimPath)) { // 当前路径下
        var navPath = router.currentRoute.path + path;
        return navPath.replace(/[^\/]+\.\//, '');
    }
    var relative = paramsArray[1].replace(/\//g, "\\/").replace(/\.\./g, "[^\\/]+").replace(/\./g, '\\.');
    var relativeReg = new RegExp("^\\/" + relative + "$");
    var route = router.options.routes.filter(function (it) { return relativeReg.test(it.path); });
    if (route.length !== 1) {
        throw new Error("\u3010" + path + "\u3011 \u8DEF\u5F84\u9519\u8BEF\uFF0C\u5C1D\u8BD5\u8F6C\u6210\u7EDD\u5BF9\u8DEF\u5F84\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u8F6C\u6210\u7EDD\u5BF9\u8DEF\u5F84(10003)\u3002");
    }
    return route[0].path + query;
}
exports.resolveAbsolutePath = resolveAbsolutePath;
function deepDecodeQuery(query) {
    var formatQuery = getDataType(query) === '[object Array]' ? [] : {};
    var keys = Object.keys(query);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var it_2 = query[key];
        if (typeof it_2 === 'string') {
            try {
                var json = JSON.parse(decodeURIComponent(it_2));
                if (typeof json !== 'object') {
                    json = it_2;
                }
                formatQuery[key] = json;
            }
            catch (error) {
                try {
                    formatQuery[key] = decodeURIComponent(it_2);
                }
                catch (error) {
                    formatQuery[key] = it_2;
                }
            }
        }
        else if (typeof it_2 === 'object') {
            var childQuery = deepDecodeQuery(it_2);
            formatQuery[key] = childQuery;
        }
        else {
            formatQuery[key] = it_2;
        }
    }
    return formatQuery;
}
exports.deepDecodeQuery = deepDecodeQuery;


/***/ }),

/***/ "./src/helpers/warn.ts":
/*!*****************************!*\
  !*** ./src/helpers/warn.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export err [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isLog [provided] [no usage info] [missing usage info prevents renaming] */
/*! export log [provided] [no usage info] [missing usage info prevents renaming] */
/*! export warn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export warnLock [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.warnLock = exports.log = exports.warn = exports.err = exports.isLog = void 0;
function isLog(type, dev, errText, enforce) {
    if (enforce === void 0) { enforce = false; }
    if (!enforce) {
        var isObject = dev.toString() === '[object Object]';
        if (dev === false) {
            return false;
        }
        else if (isObject) {
            if (dev[type] === false) {
                return false;
            }
        }
    }
    console[type](errText);
    return true;
}
exports.isLog = isLog;
function err(errText, router, enforce) {
    var dev = router.options.debugger;
    isLog('error', dev, errText, enforce);
}
exports.err = err;
function warn(errText, router, enforce) {
    var dev = router.options.debugger;
    isLog('warn', dev, errText, enforce);
}
exports.warn = warn;
function log(errText, router, enforce) {
    var dev = router.options.debugger;
    isLog('log', dev, errText, enforce);
}
exports.log = log;
function warnLock(errText) {
    console.warn(errText);
}
exports.warnLock = warnLock;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! export createRouter [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRouter = void 0;
var router_1 = __webpack_require__(/*! ./public/router */ "./src/public/router.ts");
Object.defineProperty(exports, "createRouter", ({ enumerable: true, get: function () { return router_1.createRouter; } }));


/***/ }),

/***/ "./src/options/base.ts":
/*!*****************************!*\
  !*** ./src/options/base.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hookToggle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export navtypeToggle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rewriteMethodToggle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rewriteMethodToggle = exports.navtypeToggle = exports.hookToggle = void 0;
var hookToggle;
(function (hookToggle) {
    hookToggle["beforeHooks"] = "beforeEach";
    hookToggle["afterHooks"] = "afterEach";
    hookToggle["enterHooks"] = "beforeEnter";
})(hookToggle = exports.hookToggle || (exports.hookToggle = {}));
var navtypeToggle;
(function (navtypeToggle) {
    navtypeToggle["push"] = "navigateTo";
    navtypeToggle["replace"] = "redirectTo";
    navtypeToggle["replaceAll"] = "reLaunch";
    navtypeToggle["pushTab"] = "switchTab";
    navtypeToggle["back"] = "navigateBack";
})(navtypeToggle = exports.navtypeToggle || (exports.navtypeToggle = {}));
var rewriteMethodToggle;
(function (rewriteMethodToggle) {
    rewriteMethodToggle["navigateTo"] = "push";
    rewriteMethodToggle["navigate"] = "push";
    rewriteMethodToggle["redirectTo"] = "replace";
    rewriteMethodToggle["reLaunch"] = "replaceAll";
    rewriteMethodToggle["switchTab"] = "pushTab";
    rewriteMethodToggle["navigateBack"] = "back";
})(rewriteMethodToggle = exports.rewriteMethodToggle || (exports.rewriteMethodToggle = {}));


/***/ }),

/***/ "./src/public/hooks.ts":
/*!*****************************!*\
  !*** ./src/public/hooks.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:14-18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loopCallHook = exports.transitionTo = exports.onTriggerEachHook = exports.callHook = exports.callBeforeRouteLeave = exports.HOOKLIST = exports.ERRORHOOK = void 0;
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var methods_1 = __webpack_require__(/*! ./methods */ "./src/public/methods.ts");
exports.ERRORHOOK = [
    function (error, router) { return router.lifeCycle.routerErrorHooks[0](error, router); }
];
exports.HOOKLIST = [
    function (router, to, from, toRoute, next) { return callHook(router.lifeCycle.routerBeforeHooks[0], to, from, router, next); },
    function (router, to, from, toRoute, next) { return callBeforeRouteLeave(router, to, from, next); },
    function (router, to, from, toRoute, next) { return callHook(router.lifeCycle.beforeHooks[0], to, from, router, next); },
    function (router, to, from, toRoute, next) { return callHook(toRoute.beforeEnter, to, from, router, next); },
    function (router, to, from, toRoute, next) { return callHook(router.lifeCycle.afterHooks[0], to, from, router, next, false); },
    function (router, to, from, toRoute, next) {
        router.$lockStatus = false;
        router.runId++;
        return callHook(router.lifeCycle.routerAfterHooks[0], to, from, router, next, false);
    }
];
function callBeforeRouteLeave(router, to, from, resolve) {
    var page = utils_1.getUniCachePage(0);
    var beforeRouteLeave;
    if (Object.keys(page).length > 0) {
        var leaveHooks = void 0;
        if (router.options.platform === 'h5') {
            leaveHooks = page.$options.beforeRouteLeave;
        }
        else {
            if (page.$vm != null) {
                leaveHooks = page.$vm.$options.beforeRouteLeave;
            }
        }
        switch (utils_1.getDataType(leaveHooks)) {
            case '[object Array]': // h5端表现
                beforeRouteLeave = leaveHooks[0];
                beforeRouteLeave = beforeRouteLeave.bind(page);
                break;
            case '[object Function]': // 目前app端表现
                beforeRouteLeave = leaveHooks.bind(page.$vm);
                break;
        }
    }
    return callHook(beforeRouteLeave, to, from, router, resolve);
}
exports.callBeforeRouteLeave = callBeforeRouteLeave;
function callHook(hook, to, from, router, resolve, hookAwait) {
    if (hookAwait === void 0) { hookAwait = true; }
    if (hook != null && hook instanceof Function) {
        if (hookAwait === true) {
            hook(to, from, resolve, router, false);
        }
        else {
            hook(to, from, function () { }, router, false);
            resolve();
        }
    }
    else {
        resolve();
    }
}
exports.callHook = callHook;
function onTriggerEachHook(to, from, router, hookType, next) {
    var callHookList = [];
    switch (hookType) {
        case 'beforeEach':
            callHookList = exports.HOOKLIST.slice(0, 3);
            break;
        case 'afterEach':
            callHookList = exports.HOOKLIST.slice(4);
            break;
        case 'beforeEnter':
            callHookList = exports.HOOKLIST.slice(3, 4);
            break;
    }
    transitionTo(router, to, from, 'push', callHookList, next);
}
exports.onTriggerEachHook = onTriggerEachHook;
function transitionTo(router, to, from, navType, callHookList, hookCB) {
    var _a = utils_1.forMatNextToFrom(router, to, from), matTo = _a.matTo, matFrom = _a.matFrom;
    if (router.options.platform === 'h5') {
        loopCallHook(callHookList, 0, hookCB, router, matTo, matFrom, navType);
    }
    else {
        loopCallHook(callHookList.slice(0, 4), 0, function () {
            hookCB(function () {
                loopCallHook(callHookList.slice(4), 0, utils_1.voidFun, router, matTo, matFrom, navType);
            });
        }, router, matTo, matFrom, navType);
    }
}
exports.transitionTo = transitionTo;
function loopCallHook(hooks, index, next, router, matTo, matFrom, navType) {
    var toRoute = utils_1.routesForMapRoute(router, matTo.path, ['finallyPathMap', 'pathMap']);
    if (hooks.length - 1 < index) {
        return next();
    }
    var hook = hooks[index];
    var errHook = exports.ERRORHOOK[0];
    hook(router, matTo, matFrom, toRoute, function (nextTo) {
        if (nextTo === false) {
            if (router.options.platform === 'h5') {
                next(false);
            }
            errHook({ type: 0, msg: '管道函数传递 false 导航被终止!', matTo: matTo, matFrom: matFrom, nextTo: nextTo }, router);
        }
        else if (typeof nextTo === 'string' || typeof nextTo === 'object') {
            var newNavType = navType;
            var newNextTo = nextTo;
            if (typeof nextTo === 'object') {
                var type = nextTo.NAVTYPE, moreTo = __rest(nextTo, ["NAVTYPE"]);
                newNextTo = moreTo;
                if (type != null) {
                    newNavType = type;
                }
            }
            methods_1.navjump(newNextTo, router, newNavType, { from: matFrom, next: next });
        }
        else if (nextTo == null) {
            index++;
            loopCallHook(hooks, index, next, router, matTo, matFrom, navType);
        }
        else {
            errHook({ type: 1, msg: '管道函数传递未知类型，无法被识别。导航被终止！', matTo: matTo, matFrom: matFrom, nextTo: nextTo }, router);
        }
    });
}
exports.loopCallHook = loopCallHook;


/***/ }),

/***/ "./src/public/methods.ts":
/*!*******************************!*\
  !*** ./src/public/methods.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:14-18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRoute = exports.forceGuardEach = exports.backOptionsBuild = exports.navjump = exports.lockNavjump = void 0;
var base_1 = __webpack_require__(/*! ../options/base */ "./src/options/base.ts");
var query_1 = __webpack_require__(/*! ./query */ "./src/public/query.ts");
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var hooks_1 = __webpack_require__(/*! ./hooks */ "./src/public/hooks.ts");
var page_1 = __webpack_require__(/*! ../public/page */ "./src/public/page.ts");
var hooks_2 = __webpack_require__(/*! ./hooks */ "./src/public/hooks.ts");
function lockNavjump(to, router, navType, forceNav, animation) {
    utils_1.lockDetectWarn(router, to, navType, function () {
        if (router.options.platform !== 'h5') {
            router.$lockStatus = true;
        }
        navjump(to, router, navType, undefined, forceNav, animation);
    }, animation);
}
exports.lockNavjump = lockNavjump;
function navjump(to, router, navType, nextCall, forceNav, animation, callHook) {
    if (callHook === void 0) { callHook = true; }
    if (navType === 'back') {
        var level = 1;
        if (typeof to === 'string') {
            level = +to;
        }
        else {
            level = to.delta || 1;
            // 主要剥离事件函数
            animation = __assign(__assign({}, animation || {}), to);
        }
        if (router.options.platform === 'h5') {
            router.$route.go(-level);
            // Fixe  https://github.com/SilurianYang/uni-simple-router/issues/266   2021年6月3日11:14:38
            // @ts-ignore
            var success = (animation || { success: utils_1.voidFun }).success || utils_1.voidFun;
            // @ts-ignore
            var complete = (animation || { complete: utils_1.voidFun }).complete || utils_1.voidFun;
            success({ errMsg: 'navigateBack:ok' });
            complete({ errMsg: 'navigateBack:ok' });
            return;
        }
        else {
            to = backOptionsBuild(router, level, animation);
        }
    }
    var rule = query_1.queryPageToMap(to, router).rule;
    rule.type = base_1.navtypeToggle[navType];
    var toRule = utils_1.paramsToQuery(router, rule);
    var parseToRule = query_1.resolveQuery(toRule, router);
    if (router.options.platform === 'h5') {
        if (navType !== 'push') {
            navType = 'replace';
        }
        if (nextCall != null) { // next 管道函数拦截时 直接next即可
            nextCall.next(__assign({ replace: navType !== 'push' }, parseToRule));
        }
        else {
            // Fixe  https://github.com/SilurianYang/uni-simple-router/issues/240   2021年3月7日14:45:36
            if (navType === 'push' && Reflect.has(parseToRule, 'events')) {
                if (Reflect.has(parseToRule, 'name')) {
                    throw new Error("\u5728h5\u7AEF\u4E0A\u4F7F\u7528 'push'\u3001'navigateTo' \u8DF3\u8F6C\u65F6\uFF0C\u5982\u679C\u5305\u542B events \u4E0D\u5141\u8BB8\u4F7F\u7528 name \u8DF3\u8F6C\uFF0C\u56E0\u4E3A name \u5B9E\u73B0\u4E86\u52A8\u6001\u8DEF\u7531\u3002\u8BF7\u66F4\u6362\u4E3A path \u6216\u8005 url \u8DF3\u8F6C\uFF01");
                }
                else {
                    uni['navigateTo'](parseToRule, true, utils_1.voidFun, forceNav);
                }
            }
            else {
                router.$route[navType](parseToRule, parseToRule.success || utils_1.voidFun, parseToRule.fail || utils_1.voidFun);
            }
        }
    }
    else {
        var from = { path: '' };
        if (nextCall == null) {
            var toRoute = utils_1.routesForMapRoute(router, parseToRule.path, ['finallyPathMap', 'pathMap']);
            toRoute = utils_1.notRouteTo404(router, toRoute, parseToRule, navType);
            parseToRule = __assign(__assign(__assign(__assign({}, toRoute), { params: {} }), parseToRule), { path: toRoute.path });
            from = page_1.createToFrom(parseToRule, router);
        }
        else {
            from = nextCall.from;
        }
        page_1.createFullPath(parseToRule, from);
        if (callHook === false) {
            return parseToRule;
        }
        hooks_1.transitionTo(router, parseToRule, from, navType, hooks_2.HOOKLIST, function (callOkCb) {
            uni[base_1.navtypeToggle[navType]](parseToRule, true, callOkCb, forceNav);
        });
    }
}
exports.navjump = navjump;
function backOptionsBuild(router, level, animation) {
    if (animation === void 0) { animation = {}; }
    var toRule = createRoute(router, level, undefined, __assign({ NAVTYPE: 'back' }, animation));
    var navjumpRule = __assign(__assign({}, animation), { path: toRule.path, query: toRule.query, delta: level });
    if (utils_1.getDataType(animation) === '[object Object]') {
        var _a = animation, animationDuration = _a.animationDuration, animationType = _a.animationType;
        if (animationDuration != null) {
            navjumpRule.animationDuration = animationDuration;
        }
        if (animationType != null) {
            navjumpRule.animationType = animationType;
        }
        var from = animation.from;
        if (from != null) {
            navjumpRule.BACKTYPE = from;
        }
    }
    return navjumpRule;
}
exports.backOptionsBuild = backOptionsBuild;
function forceGuardEach(router, navType, forceNav) {
    if (navType === void 0) { navType = 'replaceAll'; }
    if (forceNav === void 0) { forceNav = false; }
    if (router.options.platform === 'h5') {
        throw new Error("\u5728h5\u7AEF\u4E0A\u4F7F\u7528\uFF1AforceGuardEach \u662F\u65E0\u610F\u4E49\u7684\uFF0C\u76EE\u524D forceGuardEach \u4EC5\u652F\u6301\u5728\u975Eh5\u7AEF\u4E0A\u4F7F\u7528");
    }
    var currentPage = utils_1.getUniCachePage(0);
    if (Object.keys(currentPage).length === 0) {
        router.options.routerErrorEach({
            type: 3,
            NAVTYPE: navType,
            uniActualData: {},
            level: 0,
            msg: "\u4E0D\u5B58\u5728\u7684\u9875\u9762\u6808\uFF0C\u8BF7\u786E\u4FDD\u6709\u8DB3\u591F\u7684\u9875\u9762\u53EF\u7528\uFF0C\u5F53\u524D level:0"
        }, router);
    }
    var _a = currentPage, route = _a.route, options = _a.options;
    lockNavjump({
        path: "/" + route,
        query: utils_1.deepDecodeQuery(options || {})
    }, router, navType, forceNav);
}
exports.forceGuardEach = forceGuardEach;
function createRoute(router, level, orignRule, uniActualData) {
    if (level === void 0) { level = 0; }
    if (uniActualData === void 0) { uniActualData = {}; }
    var route = {
        name: '',
        meta: {},
        path: '',
        fullPath: '',
        NAVTYPE: '',
        query: {},
        params: {},
        BACKTYPE: (orignRule || { BACKTYPE: '' }).BACKTYPE || '' // v2.0.5 +
    };
    if (level === 19970806) { // 首次构建响应式 页面不存在 直接返回
        return route;
    }
    if (router.options.platform === 'h5') {
        var vueRoute = { path: '' };
        if (orignRule != null) {
            vueRoute = orignRule;
        }
        else {
            vueRoute = router.$route.currentRoute;
        }
        var matRouteParams = utils_1.copyData(vueRoute.params);
        delete matRouteParams.__id__;
        var toQuery = query_1.parseQuery(__assign(__assign({}, matRouteParams), utils_1.copyData(vueRoute.query)), router);
        vueRoute = __assign(__assign({}, vueRoute), { query: toQuery });
        route.path = vueRoute.path;
        route.fullPath = vueRoute.fullPath || '';
        route.query = utils_1.deepDecodeQuery(vueRoute.query || {});
        route.NAVTYPE = base_1.rewriteMethodToggle[vueRoute.type || 'reLaunch'];
    }
    else {
        var appPage = {};
        if (orignRule != null) {
            appPage = __assign(__assign({}, orignRule), { openType: orignRule.type });
        }
        else {
            var page = utils_1.getUniCachePage(level);
            if (Object.keys(page).length === 0) {
                var _NAVTYPE = uniActualData.NAVTYPE, _args = __rest(uniActualData, ["NAVTYPE"]);
                var errorMsg = "\u4E0D\u5B58\u5728\u7684\u9875\u9762\u6808\uFF0C\u8BF7\u786E\u4FDD\u6709\u8DB3\u591F\u7684\u9875\u9762\u53EF\u7528\uFF0C\u5F53\u524D level:" + level;
                router.options.routerErrorEach({
                    type: 3,
                    msg: errorMsg,
                    NAVTYPE: _NAVTYPE,
                    level: level,
                    uniActualData: _args
                }, router);
                throw new Error(errorMsg);
            }
            // Fixes: https://github.com/SilurianYang/uni-simple-router/issues/196
            var pageOptions = page.options || {};
            appPage = __assign(__assign({}, page.$page || {}), { query: utils_1.deepDecodeQuery(pageOptions), fullPath: decodeURIComponent((page.$page || {}).fullPath || '/' + page.route) });
            if (router.options.platform !== 'app-plus') {
                appPage.path = "/" + page.route;
            }
        }
        var openType = appPage.openType;
        route.query = appPage.query;
        route.path = appPage.path;
        route.fullPath = appPage.fullPath;
        route.NAVTYPE = base_1.rewriteMethodToggle[openType || 'reLaunch'];
    }
    var tableRoute = utils_1.routesForMapRoute(router, route.path, ['finallyPathMap', 'pathMap']);
    var perfectRoute = __assign(__assign({}, route), tableRoute);
    perfectRoute.query = query_1.parseQuery(perfectRoute.query, router);
    return perfectRoute;
}
exports.createRoute = createRoute;


/***/ }),

/***/ "./src/public/page.ts":
/*!****************************!*\
  !*** ./src/public/page.ts ***!
  \****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createFullPath [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createToFrom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export proxyPageHook [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetAndCallPageHook [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetPageHook [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetPageHook = exports.resetAndCallPageHook = exports.proxyPageHook = exports.createFullPath = exports.createToFrom = void 0;
var config_1 = __webpack_require__(/*! ../helpers/config */ "./src/helpers/config.ts");
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var methods_1 = __webpack_require__(/*! ./methods */ "./src/public/methods.ts");
var query_1 = __webpack_require__(/*! ./query */ "./src/public/query.ts");
function createToFrom(to, router) {
    var fromRoute = { path: '' };
    var page = utils_1.getUniCachePage(0);
    if (utils_1.getDataType(page) === '[object Array]') {
        fromRoute = utils_1.deepClone(to);
    }
    else {
        fromRoute = methods_1.createRoute(router);
    }
    return fromRoute;
}
exports.createToFrom = createToFrom;
function createFullPath(to, from) {
    if (to.fullPath == null) {
        var strQuery = query_1.stringifyQuery(to.query);
        to.fullPath = to.path + strQuery;
    }
    if (from.fullPath == null) {
        var strQuery = query_1.stringifyQuery(from.query);
        from.fullPath = from.path + strQuery;
    }
}
exports.createFullPath = createFullPath;
function proxyPageHook(vueVim, router, pageType) {
    var hookDeps = router.proxyHookDeps;
    var pageHook = vueVim.$options;
    var _loop_1 = function (i) {
        var hookName = config_1.proxyHookName[i];
        var hookList = pageHook[hookName];
        if (hookList) {
            var _loop_2 = function (k) {
                var originHook = hookList[k];
                if (originHook.toString().includes("@TENCENT/UNI-SIMPLE-ROUTER-MP")) {
                    return "continue";
                }
                var resetIndex = Object.keys(hookDeps.hooks).length + 1;
                var proxyHook = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    hookDeps.resetIndex.push(resetIndex);
                    hookDeps.options[resetIndex] = args;
                };
                var resetHook = hookList.splice(k, 1, proxyHook)[0];
                hookDeps.hooks[resetIndex] = {
                    proxyHook: proxyHook,
                    callHook: function (enterPath) {
                        if (router.enterPath.replace(/^\//, '') !== enterPath.replace(/^\//, '') && pageType !== 'app') {
                            return;
                        }
                        var options = hookDeps.options[resetIndex];
                        resetHook.apply(vueVim, options);
                    },
                    resetHook: function () {
                        hookList.splice(k, 1, resetHook);
                    }
                };
            };
            for (var k = 0; k < hookList.length; k++) {
                _loop_2(k);
            }
        }
    };
    for (var i = 0; i < config_1.proxyHookName.length; i++) {
        _loop_1(i);
    }
}
exports.proxyPageHook = proxyPageHook;
function resetAndCallPageHook(router, enterPath, reset) {
    if (reset === void 0) { reset = true; }
    // Fixe: https://github.com/SilurianYang/uni-simple-router/issues/206
    var pathInfo = enterPath.trim().match(/^(\/?[^\?\s]+)(\?[\s\S]*$)?$/);
    if (pathInfo == null) {
        throw new Error("\u8FD8\u539Fhook\u5931\u8D25\u3002\u8BF7\u68C0\u67E5 \u3010" + enterPath + "\u3011 \u8DEF\u5F84\u662F\u5426\u6B63\u786E\u3002");
    }
    enterPath = pathInfo[1];
    var proxyHookDeps = router.proxyHookDeps;
    var resetHooksArray = proxyHookDeps.resetIndex;
    for (var i = 0; i < resetHooksArray.length; i++) {
        var index = resetHooksArray[i];
        var callHook = proxyHookDeps.hooks[index].callHook;
        callHook(enterPath);
    }
    if (reset) {
        resetPageHook(router);
    }
}
exports.resetAndCallPageHook = resetAndCallPageHook;
function resetPageHook(router) {
    var proxyHookDeps = router.proxyHookDeps;
    for (var _i = 0, _a = Object.entries(proxyHookDeps.hooks); _i < _a.length; _i++) {
        var _b = _a[_i], resetHook = _b[1].resetHook;
        resetHook();
    }
}
exports.resetPageHook = resetPageHook;


/***/ }),

/***/ "./src/public/query.ts":
/*!*****************************!*\
  !*** ./src/public/query.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringifyQuery = exports.parseQuery = exports.resolveQuery = exports.queryPageToMap = void 0;
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var hooks_1 = __webpack_require__(/*! ./hooks */ "./src/public/hooks.ts");
var warn_1 = __webpack_require__(/*! ../helpers/warn */ "./src/helpers/warn.ts");
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;
var encode = function (str) {
    return encodeURIComponent(str)
        .replace(encodeReserveRE, encodeReserveReplacer)
        .replace(commaRE, ',');
};
function queryPageToMap(toRule, router) {
    var query = {};
    var route = '';
    var successCb = toRule.success;
    var failCb = toRule.fail;
    if (utils_1.getDataType(toRule) === '[object Object]') {
        var objNavRule = toRule;
        if (objNavRule.path != null) {
            var _a = utils_1.urlToJson(objNavRule.path), path = _a.path, newQuery = _a.query;
            route = utils_1.routesForMapRoute(router, path, ['finallyPathList', 'pathMap']);
            query = __assign(__assign({}, newQuery), (toRule.query || {}));
            objNavRule.path = path;
            objNavRule.query = query;
            delete toRule.params;
        }
        else if (objNavRule.name != null) {
            route = router.routesMap.nameMap[objNavRule.name];
            if (route == null) {
                route = utils_1.getWildcardRule(router, { type: 2, msg: "\u547D\u540D\u8DEF\u7531\u4E3A\uFF1A" + objNavRule.name + " \u7684\u8DEF\u7531\uFF0C\u65E0\u6CD5\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u5230\uFF01", toRule: toRule });
            }
            else {
                query = toRule.params || {};
                delete toRule.query;
            }
        }
        else {
            route = utils_1.getWildcardRule(router, { type: 2, msg: toRule + " \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u6D4B\u5F53\u524D\u8DEF\u7531\u8868\u4E0B\u662F\u5426\u6709\u5305\u542B\u3002", toRule: toRule });
        }
    }
    else {
        toRule = utils_1.urlToJson(toRule);
        route = utils_1.routesForMapRoute(router, toRule.path, ['finallyPathList', 'pathMap']);
        query = toRule.query;
    }
    if (router.options.platform === 'h5') {
        var finallyPath = utils_1.getRoutePath(route, router).finallyPath;
        if (finallyPath.includes(':') && toRule.name == null) {
            hooks_1.ERRORHOOK[0]({ type: 2, msg: "\u5F53\u6709\u8BBE\u7F6E alias\u6216\u8005aliasPath \u4E3A\u52A8\u6001\u8DEF\u7531\u65F6\uFF0C\u4E0D\u5141\u8BB8\u4F7F\u7528 path \u8DF3\u8F6C\u3002\u8BF7\u4F7F\u7528 name \u8DF3\u8F6C\uFF01", route: route }, router);
        }
        var completeCb_1 = toRule.complete;
        var cacheSuccess_1 = toRule.success;
        var cacheFail_1 = toRule.fail;
        if (utils_1.getDataType(completeCb_1) === '[object Function]') {
            var publicCb_1 = function (args, callHook) {
                if (utils_1.getDataType(callHook) === '[object Function]') {
                    callHook.apply(this, args);
                }
                completeCb_1.apply(this, args);
            };
            successCb = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                publicCb_1.call(this, args, cacheSuccess_1);
            };
            failCb = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                publicCb_1.call(this, args, cacheFail_1);
            };
        }
    }
    var rule = toRule;
    if (utils_1.getDataType(rule.success) === '[object Function]') {
        rule.success = successCb;
    }
    if (utils_1.getDataType(rule.fail) === '[object Function]') {
        rule.fail = failCb;
    }
    return {
        rule: rule,
        route: route,
        query: query
    };
}
exports.queryPageToMap = queryPageToMap;
function resolveQuery(toRule, router) {
    var queryKey = 'query';
    if (toRule.params != null) {
        queryKey = 'params';
    }
    if (toRule.query != null) {
        queryKey = 'query';
    }
    var query = utils_1.copyData(toRule[queryKey] || {});
    var userResolveQuery = router.options.resolveQuery;
    if (userResolveQuery) {
        var jsonQuery = userResolveQuery(query);
        if (utils_1.getDataType(jsonQuery) !== '[object Object]') {
            warn_1.warn('请按格式返回参数： resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}', router);
        }
        else {
            toRule[queryKey] = jsonQuery;
        }
    }
    else {
        var deepObj = utils_1.assertDeepObject(query);
        if (!deepObj) {
            return toRule;
        }
        var encode_1 = JSON.stringify(query);
        toRule[queryKey] = {
            query: encode_1
        };
    }
    return toRule;
}
exports.resolveQuery = resolveQuery;
function parseQuery(query, router) {
    var userParseQuery = router.options.parseQuery;
    if (userParseQuery) {
        query = userParseQuery(utils_1.copyData(query));
        if (utils_1.getDataType(query) !== '[object Object]') {
            warn_1.warn('请按格式返回参数： parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}', router);
        }
    }
    else {
        if (Reflect.get(query, 'query')) { // 验证一下是不是深度对象
            var deepQuery = Reflect.get(query, 'query');
            if (typeof deepQuery === 'string') {
                try {
                    deepQuery = JSON.parse(deepQuery);
                }
                catch (error) {
                    warn_1.warn('尝试解析深度对象失败，按原样输出。' + error, router);
                }
            }
            if (typeof deepQuery === 'object') {
                return utils_1.deepDecodeQuery(deepQuery);
            }
        }
    }
    return query;
}
exports.parseQuery = parseQuery;
function stringifyQuery(obj) {
    var res = obj
        ? Object.keys(obj)
            .map(function (key) {
            var val = obj[key];
            if (val === undefined) {
                return '';
            }
            if (val === null) {
                return encode(key);
            }
            if (Array.isArray(val)) {
                var result_1 = [];
                val.forEach(function (val2) {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result_1.push(encode(key));
                    }
                    else {
                        result_1.push(encode(key) + '=' + encode(val2));
                    }
                });
                return result_1.join('&');
            }
            return encode(key) + '=' + encode(val);
        })
            .filter(function (x) { return x.length > 0; })
            .join('&')
        : null;
    return res ? "?" + res : '';
}
exports.stringifyQuery = stringifyQuery;


/***/ }),

/***/ "./src/public/rewrite.ts":
/*!*******************************!*\
  !*** ./src/public/rewrite.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rewriteMethod = void 0;
var base_1 = __webpack_require__(/*! ../options/base */ "./src/options/base.ts");
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var warn_1 = __webpack_require__(/*! ../helpers/warn */ "./src/helpers/warn.ts");
var uniOrigin_1 = __webpack_require__(/*! ./uniOrigin */ "./src/public/uniOrigin.ts");
var rewrite = [
    'navigateTo',
    'redirectTo',
    'reLaunch',
    'switchTab',
    'navigateBack'
];
var cacheOldMethod = {
    navigateTo: function () { },
    redirectTo: function () { },
    reLaunch: function () { },
    switchTab: function () { },
    navigateBack: function () { }
};
function rewriteMethod(router) {
    if (router.options.keepUniOriginNav === false) {
        rewrite.forEach(function (name) {
            var oldMethod = uni[name];
            cacheOldMethod[name] = oldMethod;
            uni[name] = function (params, originCall, callOkCb, forceNav) {
                if (originCall === void 0) { originCall = false; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (originCall) {
                            uniOrigin_1.uniOriginJump(router, oldMethod, name, params, callOkCb, forceNav);
                        }
                        else {
                            if (router.options.platform === 'app-plus') {
                                if (Object.keys(router.appMain).length === 0) {
                                    router.appMain = {
                                        NAVTYPE: name,
                                        path: params.url
                                    };
                                }
                            }
                            callRouterMethod(params, name, router);
                        }
                        return [2 /*return*/];
                    });
                });
            };
        });
    }
}
exports.rewriteMethod = rewriteMethod;
function callRouterMethod(option, funName, router) {
    if (router.options.platform === 'app-plus') {
        var openType = null;
        if (option) {
            openType = option.openType;
        }
        if (openType != null && openType === 'appLaunch') {
            funName = 'reLaunch';
        }
    }
    if (funName === 'reLaunch' && JSON.stringify(option) === '{"url":"/"}') {
        warn_1.warn("uni-app \u539F\u751F\u65B9\u6CD5\uFF1AreLaunch({url:'/'}) \u9ED8\u8BA4\u88AB\u91CD\u5199\u5566\uFF01\u4F60\u53EF\u4EE5\u4F7F\u7528 this.$Router.replaceAll() \u6216\u8005 uni.reLaunch({url:'/?xxx=xxx'})", router);
        funName = 'navigateBack';
        option = {
            from: 'backbutton'
        };
    }
    if (funName === 'navigateBack') {
        var level = 1;
        if (option == null) {
            option = { delta: 1 };
        }
        if (utils_1.getDataType(option.delta) === '[object Number]') {
            level = option.delta;
        }
        router.back(level, option);
    }
    else {
        var routerMethodName = base_1.rewriteMethodToggle[funName];
        var path = option.url;
        if (!path.startsWith('/')) {
            var absolutePath = utils_1.resolveAbsolutePath(path, router);
            path = absolutePath;
            option.url = absolutePath;
        }
        if (funName === 'switchTab') {
            var route = utils_1.routesForMapRoute(router, path, ['pathMap', 'finallyPathList']);
            var finallyPath = utils_1.getRoutePath(route, router).finallyPath;
            if (utils_1.getDataType(finallyPath) === '[object Array]') {
                warn_1.warn("uni-app \u539F\u751F\u65B9\u6CD5\u8DF3\u8F6C\u8DEF\u5F84\u4E3A\uFF1A" + path + "\u3002\u6B64\u8DEF\u4E3A\u662Ftab\u9875\u9762\u65F6\uFF0C\u4E0D\u5141\u8BB8\u8BBE\u7F6E alias \u4E3A\u6570\u7EC4\u7684\u60C5\u51B5\uFF0C\u5E76\u4E14\u4E0D\u80FD\u4E3A\u52A8\u6001\u8DEF\u7531\uFF01\u5F53\u7136\u4F60\u53EF\u4EE5\u901A\u8FC7\u901A\u914D\u7B26*\u89E3\u51B3\uFF01", router);
            }
            if (finallyPath === '*') {
                warn_1.warn("uni-app \u539F\u751F\u65B9\u6CD5\u8DF3\u8F6C\u8DEF\u5F84\u4E3A\uFF1A" + path + "\u3002\u5728\u8DEF\u7531\u8868\u4E2D\u627E\u4E0D\u5230\u76F8\u5173\u8DEF\u7531\u8868\uFF01\u5F53\u7136\u4F60\u53EF\u4EE5\u901A\u8FC7\u901A\u914D\u7B26*\u89E3\u51B3\uFF01", router);
            }
            // Fixe h5 端无法触发 onTabItemTap hook  2021年6月3日17:26:47
            if (router.options.platform === 'h5') {
                var userSuccess_1 = option.success;
                option.success = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    userSuccess_1 === null || userSuccess_1 === void 0 ? void 0 : userSuccess_1.apply(null, args);
                    utils_1.timeOut(150).then(function () {
                        var cbArgs = option.detail || {};
                        if (Object.keys(cbArgs).length > 0 && Reflect.has(cbArgs, 'index')) {
                            var cachePage = utils_1.getUniCachePage(0);
                            if (Object.keys(cachePage).length === 0) {
                                return false;
                            }
                            var page = cachePage;
                            var hooks = page.$options.onTabItemTap;
                            if (hooks) {
                                for (var j = 0; j < hooks.length; j++) {
                                    hooks[j].call(page, cbArgs);
                                }
                            }
                        }
                    });
                };
            }
            path = finallyPath;
        }
        var _a = option, events = _a.events, success = _a.success, fail_1 = _a.fail, complete = _a.complete, animationType = _a.animationType, animationDuration = _a.animationDuration;
        var jumpOptions = { path: path, events: events, success: success, fail: fail_1, complete: complete, animationDuration: animationDuration, animationType: animationType };
        router[routerMethodName](utils_1.notDeepClearNull(jumpOptions));
    }
}


/***/ }),

/***/ "./src/public/router.ts":
/*!******************************!*\
  !*** ./src/public/router.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRouter = void 0;
var config_1 = __webpack_require__(/*! ../helpers/config */ "./src/helpers/config.ts");
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var lifeCycle_1 = __webpack_require__(/*! ../helpers/lifeCycle */ "./src/helpers/lifeCycle.ts");
var mixins_1 = __webpack_require__(/*! ../helpers/mixins */ "./src/helpers/mixins.ts");
var methods_1 = __webpack_require__(/*! ../public/methods */ "./src/public/methods.ts");
var rewrite_1 = __webpack_require__(/*! ../public/rewrite */ "./src/public/rewrite.ts");
var AppReadyResolve = function () { };
var AppReady = new Promise(function (resolve) { return (AppReadyResolve = resolve); });
function createRouter(params) {
    var options = utils_1.assertNewOptions(params);
    var router = {
        options: options,
        mount: [],
        runId: 0,
        Vue: null,
        proxyHookDeps: config_1.proxyHookDeps,
        appMain: {},
        enterPath: '',
        $route: null,
        $lockStatus: false,
        routesMap: {},
        lifeCycle: lifeCycle_1.registerRouterHooks(config_1.lifeCycle, options),
        push: function (to) {
            methods_1.lockNavjump(to, router, 'push');
        },
        replace: function (to) {
            methods_1.lockNavjump(to, router, 'replace');
        },
        replaceAll: function (to) {
            methods_1.lockNavjump(to, router, 'replaceAll');
        },
        pushTab: function (to) {
            methods_1.lockNavjump(to, router, 'pushTab');
        },
        back: function (level, animation) {
            if (level === void 0) { level = 1; }
            if (utils_1.getDataType(animation) !== '[object Object]') {
                var backRule = {
                    from: 'navigateBack'
                };
                animation = backRule;
            }
            else {
                if (!Reflect.has(animation, 'from')) {
                    animation = __assign(__assign({}, animation), { from: 'navigateBack' });
                }
            }
            methods_1.lockNavjump(level + '', router, 'back', undefined, animation);
        },
        forceGuardEach: function (navType, forceNav) {
            methods_1.forceGuardEach(router, navType, forceNav);
        },
        beforeEach: function (userGuard) {
            lifeCycle_1.registerEachHooks(router, 'beforeHooks', userGuard);
        },
        afterEach: function (userGuard) {
            lifeCycle_1.registerEachHooks(router, 'afterHooks', userGuard);
        },
        install: function (Vue) {
            router.Vue = Vue;
            rewrite_1.rewriteMethod(this);
            mixins_1.initMixins(Vue, this);
            Object.defineProperty(Vue.prototype, '$Router', {
                get: function () {
                    var actualData = router;
                    Object.defineProperty(this, '$Router', {
                        value: actualData,
                        writable: false,
                        configurable: false,
                        enumerable: false
                    });
                    return Object.seal(actualData);
                }
            });
            Object.defineProperty(Vue.prototype, '$Route', {
                get: function () {
                    return methods_1.createRoute(router);
                }
            });
            // 【Fixe】  https://github.com/SilurianYang/uni-simple-router/issues/254
            Object.defineProperty(Vue.prototype, '$AppReady', {
                get: function () {
                    if (router.options.platform === 'h5') {
                        return Promise.resolve();
                    }
                    return AppReady;
                },
                set: function (value) {
                    if (value === true) {
                        AppReadyResolve();
                    }
                }
            });
        }
    };
    utils_1.def(router, 'currentRoute', function () { return methods_1.createRoute(router); });
    router.beforeEach(function (to, from, next) { return next(); });
    router.afterEach(function () { });
    return router;
}
exports.createRouter = createRouter;


/***/ }),

/***/ "./src/public/uniOrigin.ts":
/*!*********************************!*\
  !*** ./src/public/uniOrigin.ts ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:16-20 */
/*! CommonJS bailout: this is used directly at 13:17-21 */
/*! CommonJS bailout: this is used directly at 22:19-23 */
/*! CommonJS bailout: this is used directly at 49:14-18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatOriginURLQuery = exports.uniOriginJump = void 0;
var query_1 = __webpack_require__(/*! ./query */ "./src/public/query.ts");
var utils_1 = __webpack_require__(/*! ../helpers/utils */ "./src/helpers/utils.ts");
var config_1 = __webpack_require__(/*! ../helpers/config */ "./src/helpers/config.ts");
var page_1 = __webpack_require__(/*! ./page */ "./src/public/page.ts");
var routerNavCount = 0;
var lastNavType = 'reLaunch';
function uniOriginJump(router, originMethod, funName, options, callOkCb, forceNav) {
    var _a = formatOriginURLQuery(router, options, funName), complete = _a.complete, originRule = __rest(_a, ["complete"]);
    var platform = router.options.platform;
    if (forceNav != null && forceNav === false) {
        if (routerNavCount === 0) {
            routerNavCount++;
            if (platform !== 'h5') {
                page_1.resetAndCallPageHook(router, originRule.url); // 还原及执行app.vue及首页下已经重写后的生命周期
                // 【Fixe】  https://github.com/SilurianYang/uni-simple-router/issues/254
                // 在小程序端  next 直接放行会执行这个
                router.Vue.prototype.$AppReady = true;
            }
        }
        complete && complete.apply(null, { msg: 'forceGuardEach强制触发并且不执行跳转' });
        callOkCb && callOkCb.apply(null, { msg: 'forceGuardEach强制触发并且不执行跳转' });
    }
    else {
        if (routerNavCount === 0) {
            if (platform === 'app-plus') {
                page_1.resetAndCallPageHook(router, originRule.url); // 还原及执行app.vue下已经重写后的生命周期
            }
            else {
                if (new RegExp(config_1.mpPlatformReg, 'g').test(platform)) {
                    // 其他就是在小程序下，首次启动发生跳转会走这里
                    // 我们先将app.vue的生命周期执行
                    page_1.resetAndCallPageHook(router, originRule.url, false);
                }
            }
        }
        originMethod(__assign(__assign({}, originRule), { from: options.BACKTYPE, complete: function () {
                var _a, _b, _c, _d;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var waitPage, launchedHook, time;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (routerNavCount === 0) {
                                    routerNavCount++;
                                    if (platform !== 'h5') {
                                        if (new RegExp(config_1.mpPlatformReg, 'g').test(platform)) { // 跳转完成后小程序下还原生命周期
                                            page_1.resetPageHook(router);
                                        }
                                        // 【Fixe】  https://github.com/SilurianYang/uni-simple-router/issues/254
                                        // 在小程序端 第一次 next 做跳转  会触发这个 、在app端首次必定会触发这个
                                        router.Vue.prototype.$AppReady = true;
                                        if (platform === 'app-plus') {
                                            waitPage = plus.nativeObj.View.getViewById('router-loadding');
                                            waitPage && waitPage.close();
                                            launchedHook = (_a = router.options.APP) === null || _a === void 0 ? void 0 : _a.launchedHook;
                                            launchedHook && launchedHook();
                                        }
                                    }
                                }
                                time = 0;
                                if (new RegExp(config_1.mpPlatformReg, 'g').test(platform)) {
                                    time = ((_b = router.options.applet) === null || _b === void 0 ? void 0 : _b.animationDuration);
                                }
                                else if (platform === 'app-plus') {
                                    if (funName === 'navigateBack' && lastNavType === 'navigateTo') {
                                        time = ((_d = (_c = router.options.APP) === null || _c === void 0 ? void 0 : _c.animation) === null || _d === void 0 ? void 0 : _d.animationDuration);
                                    }
                                }
                                if (!(funName === 'navigateTo' || funName === 'navigateBack')) return [3 /*break*/, 2];
                                if (!(time !== 0)) return [3 /*break*/, 2];
                                return [4 /*yield*/, utils_1.timeOut(time)];
                            case 1:
                                _e.sent();
                                _e.label = 2;
                            case 2:
                                lastNavType = funName;
                                complete && complete.apply(null, args);
                                callOkCb && callOkCb.apply(null, args);
                                return [2 /*return*/];
                        }
                    });
                });
            } }));
    }
}
exports.uniOriginJump = uniOriginJump;
function formatOriginURLQuery(router, options, funName) {
    var _a;
    var url = options.url, path = options.path, query = options.query, animationType = options.animationType, animationDuration = options.animationDuration, events = options.events, success = options.success, fail = options.fail, complete = options.complete, delta = options.delta, animation = options.animation;
    var strQuery = query_1.stringifyQuery(query || {});
    var queryURL = strQuery === '' ? (path || url) : (path || url) + strQuery;
    var animationRule = {};
    if (router.options.platform === 'app-plus') {
        if (funName !== 'navigateBack') {
            animationRule = ((_a = router.options.APP) === null || _a === void 0 ? void 0 : _a.animation) || {};
            animationRule = __assign(__assign({}, animationRule), animation || {});
        }
    }
    return utils_1.notDeepClearNull({
        delta: delta,
        url: queryURL,
        animationType: animationType || animationRule.animationType,
        animationDuration: animationDuration || animationRule.animationDuration,
        events: events,
        success: success,
        fail: fail,
        complete: complete
    });
}
exports.formatOriginURLQuery = formatOriginURLQuery;


/***/ }),

/***/ "@tencent/t-comm/lib/router/path-to-regexp":
/*!************************************************************!*\
  !*** external "@tencent/t-comm/lib/router/path-to-regexp" ***!
  \************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@tencent/t-comm/lib/router/path-to-regexp");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=uni-simple-router.js.map