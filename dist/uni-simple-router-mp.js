!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Router=t():e.Router=t()}(self,(function(){return(()=>{"use strict";var e={360:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.proxyHookName=t.proxyHookDeps=t.lifeCycle=t.baseConfig=t.mpPlatformReg=void 0;var o=r(814),n=r(25);t.mpPlatformReg="(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)",t.baseConfig={h5:{paramsToQuery:!1,vueRouterDev:!1,vueNext:!1,mode:"hash",base:"/",linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",scrollBehavior:function(e,t,r){return{x:0,y:0}},fallback:!0},APP:{registerLoadingPage:!0,loadingPageStyle:function(){return JSON.parse('{"backgroundColor":"#FFF"}')},loadingPageHook:function(e){e.show()},launchedHook:function(){plus.navigator.closeSplashscreen()},animation:{}},applet:{animationDuration:300},beforeProxyHooks:{onLoad:function(e,t,r){var o=e[0];t([n.parseQuery({query:o},r)])}},platform:"h5",keepUniOriginNav:!1,debugger:!1,routerBeforeEach:function(e,t,r){r()},routerAfterEach:function(e,t){},routerErrorEach:function(e,t){t.$lockStatus=!1,o.err(e,t,!0)},detectBeforeLock:function(e,t,r){},routes:[{path:"/choose-location"},{path:"/open-location"},{path:"/preview-image"}]},t.lifeCycle={beforeHooks:[],afterHooks:[],routerBeforeHooks:[],routerAfterHooks:[],routerErrorHooks:[]},t.proxyHookDeps={resetIndex:[],hooks:{},options:{}},t.proxyHookName=["onLaunch","onShow","onHide","onError","onInit","onLoad","onReady","onUnload","onResize","created","beforeMount","mounted","beforeDestroy","destroyed"]},43:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createRouteMap=void 0;var o=r(974);t.createRouteMap=function(e,t){var r={finallyPathList:[],finallyPathMap:Object.create(null),aliasPathMap:Object.create(null),pathMap:Object.create(null),vueRouteMap:Object.create(null),nameMap:Object.create(null)};return t.forEach((function(t){var n=o.getRoutePath(t,e),a=n.finallyPath,i=n.aliasPath,u=n.path;if(null==u){var l="error";throw new Error(l)}if(a instanceof Array&&!e.options.h5.vueRouterDev&&"h5"===e.options.platform)throw l="error",new Error(l);var c=a,p=i;"h5"!==e.options.platform&&c.indexOf("/"),r.finallyPathMap[c]||(r.finallyPathMap[c]=t,r.aliasPathMap[p]=t,r.pathMap[u]=t,r.finallyPathList.push(c),null!=t.name&&(r.nameMap[t.name]=t))})),r}},727:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerEachHooks=t.registerRouterHooks=t.registerHook=void 0;var o=r(296),n=r(119);function a(e,t){e[0]=t}t.registerHook=a,t.registerRouterHooks=function(e,t){return a(e.routerBeforeHooks,(function(e,r,o){t.routerBeforeEach(e,r,o)})),a(e.routerAfterHooks,(function(e,r){t.routerAfterEach(e,r)})),a(e.routerErrorHooks,(function(e,r){t.routerErrorEach(e,r)})),e},t.registerEachHooks=function(e,t,r){a(e.lifeCycle[t],(function(e,a,i,u,l){l?n.onTriggerEachHook(e,a,u,o.hookToggle[t],i):r(e,a,i)}))}},412:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initMixins=void 0;var o=r(43);t.initMixins=function(e,t){var r=o.createRouteMap(t,t.options.routes);t.routesMap=r}},974:function(e,t,r){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},a=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,n++)o[n]=a[i];return o},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.deepDecodeQuery=t.resolveAbsolutePath=t.assertParentChild=t.lockDetectWarn=t.deepClone=t.baseClone=t.assertDeepObject=t.paramsToQuery=t.forMatNextToFrom=t.urlToJson=t.getUniCachePage=t.removeSimpleValue=t.copyData=t.getDataType=t.routesForMapRoute=t.notRouteTo404=t.getWildcardRule=t.assertNewOptions=t.getRoutePath=t.notDeepClearNull=t.mergeConfig=t.timeOut=t.def=t.voidFun=void 0;var u=r(360),l=r(119),c=r(814),p=r(910),s=i(r(534));function f(e,t){for(var r=Object.create(null),n=Object.keys(e).concat(["resolveQuery","parseQuery"]),i=0;i<n.length;i+=1){var u=n[i];null!=t[u]?t[u].constructor===Object?r[u]=o(o({},e[u]),t[u]):r[u]="routes"===u?a(e[u],t[u]):t[u]:r[u]=e[u]}return r}function h(e,t){var r=e.aliasPath||e.alias||e.path;return"h5"!==t.options.platform&&(r=e.path),{finallyPath:r,aliasPath:e.aliasPath||e.path,path:e.path,alias:e.alias}}function v(e,t){var r=e.routesMap.finallyPathMap["*"];if(r)return r;throw t&&l.ERRORHOOK[0](t,e),new Error("当前路由表匹配规则已全部匹配完成，未找到满足的匹配规则。你可以使用 '*' 通配符捕捉最后的异常")}function y(e){return Object.prototype.toString.call(e)}function g(e,t){if(null==e)t=e;else for(var r=0,o=Object.keys(e);r<o.length;r++){var n=o[r],a=n;e[n]!==e&&("object"==typeof e[n]?(t[a]="[object Array]"===y(e[n])?[]:{},t[a]=g(e[n],t[a])):t[a]=e[n])}return t}function d(e){var t="[object Array]"===y(e)?[]:{};return g(e,t),t}t.voidFun=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},t.def=function(e,t,r){Object.defineProperty(e,t,{get:function(){return r()}})},t.timeOut=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},t.mergeConfig=f,t.notDeepClearNull=function(e){for(var t in e)null==e[t]&&delete e[t];return e},t.getRoutePath=h,t.assertNewOptions=function(e){var t,r=e.platform,o=e.routes;if(null==r)throw new Error("你在实例化路由时必须传递 'platform'");if(null==o||0===o.length)throw new Error("你在实例化路由时必须传递 routes 为空，这是无意义的。");return"h5"===e.platform&&(null===(t=e.h5)||void 0===t?void 0:t.vueRouterDev)&&(u.baseConfig.routes=[]),f(u.baseConfig,e)},t.getWildcardRule=v,t.notRouteTo404=function(e,t,r,o){if("*"!==t.path)return t;var n=t.redirect;if(void 0===n)throw new Error(" *  通配符必须配合 redirect 使用。redirect: string | Location | Function");var a=n;return"function"==typeof a&&(a=a(r)),p.navjump(a,e,o,void 0,void 0,void 0,!1)},t.routesForMapRoute=function e(t,r,o,n){var a;if(void 0===n&&(n=!1),null===(a=t.options.h5)||void 0===a?void 0:a.vueRouterDev)return{path:r};for(var i=r.split("?")[0],u="",l=t.routesMap,c=0;c<o.length;c++)for(var p=l[o[c]],f=0,h=Object.entries(p);f<h.length;f++){var g=h[f],d=g[0],m=g[1];if("*"!==d){var b=m,O=d;if("[object Array]"===y(p)&&(O=b),null!=s.default(O).exec(i))return"[object String]"===y(b)?l.finallyPathMap[b]:b}else""===u&&(u="*")}if(n)return{};if(l.aliasPathMap){var P=e(t,r,["aliasPathMap"],!0);if(Object.keys(P).length>0)return P}if(""!==u)return v(t);throw new Error(r+" 路径无法在路由表中找到！检查跳转路径及路由表")},t.getDataType=y,t.copyData=function(e){return JSON.parse(JSON.stringify(e))},t.removeSimpleValue=function(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return e.splice(r,1),!0;return!1},t.getUniCachePage=function(e){var t=getCurrentPages();if(null==e)return t;if(0===t.length)return t;var r=t.reverse()[e];return null==r?[]:r},t.urlToJson=function(e){var t={},r=e.split("?"),o=r[0],n=r[1];if(null!=n)for(var a=0,i=n.split("&");a<i.length;a++){var u=i[a].split("=");t[u[0]]=u[1]}return{path:o,query:t}},t.forMatNextToFrom=function(e,t,r){var o=[t,r],n=o[0],a=o[1];return{matTo:n=p.createRoute(e,void 0,d(n)),matFrom:a=p.createRoute(e,void 0,d(a))}},t.paramsToQuery=function(e,t){var r;if("h5"===e.options.platform&&!(null===(r=e.options.h5)||void 0===r?void 0:r.paramsToQuery))return t;if("[object Object]"===y(t)){var a=t,i=a.name,u=a.params,c=n(a,["name","params"]),p=u;if("h5"!==e.options.platform&&null==p&&(p={}),null!=i&&null!=p){var s=e.routesMap.nameMap[i];null==s&&(s=v(e,{type:2,msg:"命名路由为："+i+" 的路由，无法在路由表中找到！",toRule:t}));var f=h(s,e).finallyPath;if(!f.includes(":"))return o(o({},c),{path:f,query:p});l.ERRORHOOK[0]({type:2,msg:"动态路由："+f+" 无法使用 paramsToQuery！",toRule:t},e)}}return t},t.assertDeepObject=function(e){var t=null;try{t=JSON.stringify(e).match(/\{|\[|\}|\]/g)}catch(e){c.warnLock("传递的参数解析对象失败。"+e)}return null!=t&&t.length>3},t.baseClone=g,t.deepClone=d,t.lockDetectWarn=function(e,t,r,o,n,a){if(void 0===n&&(n={}),"afterHooks"===a)o();else{var i=e.options.detectBeforeLock;i&&i(e,t,r),e.$lockStatus?e.options.routerErrorEach({type:2,msg:"当前页面正在处于跳转状态，请稍后再进行跳转....",NAVTYPE:r,uniActualData:n},e):o()}},t.assertParentChild=function(e,t){for(;null!=t.$parent;){var r=t.$parent.$mp;if(r.page&&r.page.is===e)return!0;t=t.$parent}try{if(t.$mp.page.is===e||t.$mp.page.route===e)return!0}catch(e){return!1}return!1},t.resolveAbsolutePath=function(e,t){var r=/^\/?([^\?\s]+)(\?.+)?$/,o=e.trim();if(!r.test(o))throw new Error("【"+e+"】 路径错误，请提供完整的路径(10001)。");var n=o.match(r);if(null==n)throw new Error("【"+e+"】 路径错误，请提供完整的路径(10002)。");var a=n[2]||"";if(/^\.\/[^\.]+/.test(o))return(t.currentRoute.path+e).replace(/[^\/]+\.\//,"");var i=n[1].replace(/\//g,"\\/").replace(/\.\./g,"[^\\/]+").replace(/\./g,"\\."),u=new RegExp("^\\/"+i+"$"),l=t.options.routes.filter((function(e){return u.test(e.path)}));if(1!==l.length)throw new Error("【"+e+"】 路径错误，尝试转成绝对路径失败，请手动转成绝对路径(10003)。");return l[0].path+a},t.deepDecodeQuery=function e(t){for(var r="[object Array]"===y(t)?[]:{},o=Object.keys(t),n=0;n<o.length;n++){var a=o[n],i=t[a];if("string"==typeof i)try{var u=JSON.parse(decodeURIComponent(i));"object"!=typeof u&&(u=i),r[a]=u}catch(e){try{r[a]=decodeURIComponent(i)}catch(e){r[a]=i}}else if("object"==typeof i){var l=e(i);r[a]=l}else r[a]=i}return r}},814:(e,t)=>{function r(e,t,r,o){if(void 0===o&&(o=!1),!o){var n="[object Object]"===t.toString();if(!1===t)return!1;if(n&&!1===t[e])return!1}return console[e](r),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.warnLock=t.log=t.warn=t.err=t.isLog=void 0,t.isLog=r,t.err=function(e,t,o){r("error",t.options.debugger,e,o)},t.warn=function(e,t,o){r("warn",t.options.debugger,e,o)},t.log=function(e,t,o){r("log",t.options.debugger,e,o)},t.warnLock=function(e){console.warn(e)}},230:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=void 0;var o=r(124);Object.defineProperty(t,"createRouter",{enumerable:!0,get:function(){return o.createRouter}})},296:(e,t)=>{var r,o,n;Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteMethodToggle=t.navtypeToggle=t.hookToggle=void 0,(n=t.hookToggle||(t.hookToggle={})).beforeHooks="beforeEach",n.afterHooks="afterEach",n.enterHooks="beforeEnter",(o=t.navtypeToggle||(t.navtypeToggle={})).push="navigateTo",o.replace="redirectTo",o.replaceAll="reLaunch",o.pushTab="switchTab",o.back="navigateBack",(r=t.rewriteMethodToggle||(t.rewriteMethodToggle={})).navigateTo="push",r.navigate="push",r.redirectTo="replace",r.reLaunch="replaceAll",r.switchTab="pushTab",r.navigateBack="back"},119:function(e,t,r){var o=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.loopCallHook=t.transitionTo=t.onTriggerEachHook=t.callHook=t.callBeforeRouteLeave=t.HOOKLIST=t.ERRORHOOK=void 0;var n=r(974),a=r(910);function i(e,t,r,o){var a,i=n.getUniCachePage(0);if(Object.keys(i).length>0){var l=void 0;switch("h5"===e.options.platform?l=i.$options.beforeRouteLeave:null!=i.$vm&&(l=i.$vm.$options.beforeRouteLeave),n.getDataType(l)){case"[object Array]":a=(a=l[0]).bind(i);break;case"[object Function]":a=l.bind(i.$vm)}}return u(a,t,r,e,o)}function u(e,t,r,o,n,a){void 0===a&&(a=!0),null!=e&&e instanceof Function?!0===a?e(t,r,n,o,!1):(e(t,r,(function(){}),o,!1),n()):n()}function l(e,t,r,o,a,i){var u=n.forMatNextToFrom(e,t,r),l=u.matTo,p=u.matFrom;"h5"===e.options.platform?c(a,0,i,e,l,p,o):c(a.slice(0,4),0,(function(){i((function(){c(a.slice(4),0,n.voidFun,e,l,p,o)}))}),e,l,p,o)}function c(e,r,i,u,l,p,s){var f=n.routesForMapRoute(u,l.path,["finallyPathMap","pathMap"]);if(e.length-1<r)return i();var h=e[r],v=t.ERRORHOOK[0];h(u,l,p,f,(function(t){if(!1===t)"h5"===u.options.platform&&i(!1),v({type:0,msg:"管道函数传递 false 导航被终止!",matTo:l,matFrom:p,nextTo:t},u);else if("string"==typeof t||"object"==typeof t){var n=s,f=t;if("object"==typeof t){var h=t.NAVTYPE;f=o(t,["NAVTYPE"]),null!=h&&(n=h)}a.navjump(f,u,n,{from:p,next:i})}else null==t?(r++,c(e,r,i,u,l,p,s)):v({type:1,msg:"管道函数传递未知类型，无法被识别。导航被终止！",matTo:l,matFrom:p,nextTo:t},u)}))}t.ERRORHOOK=[function(e,t){return t.lifeCycle.routerErrorHooks[0](e,t)}],t.HOOKLIST=[function(e,t,r,o,n){return u(e.lifeCycle.routerBeforeHooks[0],t,r,e,n)},function(e,t,r,o,n){return i(e,t,r,n)},function(e,t,r,o,n){return u(e.lifeCycle.beforeHooks[0],t,r,e,n)},function(e,t,r,o,n){return u(o.beforeEnter,t,r,e,n)},function(e,t,r,o,n){return u(e.lifeCycle.afterHooks[0],t,r,e,n,!1)},function(e,t,r,o,n){return e.$lockStatus=!1,e.runId++,u(e.lifeCycle.routerAfterHooks[0],t,r,e,n,!1)}],t.callBeforeRouteLeave=i,t.callHook=u,t.onTriggerEachHook=function(e,r,o,n,a){var i=[];switch(n){case"beforeEach":i=t.HOOKLIST.slice(0,3);break;case"afterEach":i=t.HOOKLIST.slice(4);break;case"beforeEnter":i=t.HOOKLIST.slice(3,4)}l(o,e,r,"push",i,a)},t.transitionTo=l,t.loopCallHook=c},910:function(e,t,r){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.createRoute=t.forceGuardEach=t.backOptionsBuild=t.navjump=t.lockNavjump=void 0;var a=r(296),i=r(25),u=r(974),l=r(119),c=r(922),p=r(119);function s(e,t,r,o,n){u.lockDetectWarn(t,e,r,(function(){"h5"!==t.options.platform&&(t.$lockStatus=!0),f(e,t,r,void 0,o,n)}),n)}function f(e,t,r,n,s,f,v){if(void 0===v&&(v=!0),"back"===r){var y=1;if("string"==typeof e?y=+e:(y=e.delta||1,f=o(o({},f||{}),e)),"h5"===t.options.platform){t.$route.go(-y);var g=(f||{success:u.voidFun}).success||u.voidFun,d=(f||{complete:u.voidFun}).complete||u.voidFun;return g({errMsg:"navigateBack:ok"}),void d({errMsg:"navigateBack:ok"})}e=h(t,y,f)}var m=i.queryPageToMap(e,t).rule;m.type=a.navtypeToggle[r];var b=u.paramsToQuery(t,m),O=i.resolveQuery(b,t);if("h5"===t.options.platform)if("push"!==r&&(r="replace"),null!=n)n.next(o({replace:"push"!==r},O));else if("push"===r&&Reflect.has(O,"events")){if(Reflect.has(O,"name"))throw new Error("在h5端上使用 'push'、'navigateTo' 跳转时，如果包含 events 不允许使用 name 跳转，因为 name 实现了动态路由。请更换为 path 或者 url 跳转！");uni.navigateTo(O,!0,u.voidFun,s)}else t.$route[r](O,O.success||u.voidFun,O.fail||u.voidFun);else{var P={path:""};if(null==n){var k=u.routesForMapRoute(t,O.path,["finallyPathMap","pathMap"]);k=u.notRouteTo404(t,k,O,r),O=o(o(o(o({},k),{params:{}}),O),{path:k.path}),P=c.createToFrom(O,t)}else P=n.from;if(c.createFullPath(O,P),!1===v)return O;l.transitionTo(t,O,P,r,p.HOOKLIST,(function(e){uni[a.navtypeToggle[r]](O,!0,e,s)}))}}function h(e,t,r){void 0===r&&(r={});var n=v(e,t,void 0,o({NAVTYPE:"back"},r)),a=o(o({},r),{path:n.path,query:n.query,delta:t});if("[object Object]"===u.getDataType(r)){var i=r,l=i.animationDuration,c=i.animationType;null!=l&&(a.animationDuration=l),null!=c&&(a.animationType=c);var p=r.from;null!=p&&(a.BACKTYPE=p)}return a}function v(e,t,r,l){void 0===t&&(t=0),void 0===l&&(l={});var c={name:"",meta:{},path:"",fullPath:"",NAVTYPE:"",query:{},params:{},BACKTYPE:(r||{BACKTYPE:""}).BACKTYPE||""};if(19970806===t)return c;if("h5"===e.options.platform){var p={path:""};p=null!=r?r:e.$route.currentRoute;var s=u.copyData(p.params);delete s.__id__;var f=i.parseQuery(o(o({},s),u.copyData(p.query)),e);p=o(o({},p),{query:f}),c.path=p.path,c.fullPath=p.fullPath||"",c.query=u.deepDecodeQuery(p.query||{}),c.NAVTYPE=a.rewriteMethodToggle[p.type||"reLaunch"]}else{var h={};if(null!=r)h=o(o({},r),{openType:r.type});else{var v=u.getUniCachePage(t);if(0===Object.keys(v).length){var y=l.NAVTYPE,g=n(l,["NAVTYPE"]),d="不存在的页面栈，请确保有足够的页面可用，当前 level:"+t;throw e.options.routerErrorEach({type:3,msg:d,NAVTYPE:y,level:t,uniActualData:g},e),new Error(d)}var m=v.options||{};h=o(o({},v.$page||{}),{query:u.deepDecodeQuery(m),fullPath:decodeURIComponent((v.$page||{}).fullPath||"/"+v.route)}),"app-plus"!==e.options.platform&&(h.path="/"+v.route)}var b=h.openType;c.query=h.query,c.path=h.path,c.fullPath=h.fullPath,c.NAVTYPE=a.rewriteMethodToggle[b||"reLaunch"]}var O=u.routesForMapRoute(e,c.path,["finallyPathMap","pathMap"]),P=o(o({},c),O);return P.query=i.parseQuery(P.query,e),P}t.lockNavjump=s,t.navjump=f,t.backOptionsBuild=h,t.forceGuardEach=function(e,t,r){if(void 0===t&&(t="replaceAll"),void 0===r&&(r=!1),"h5"===e.options.platform)throw new Error("在h5端上使用：forceGuardEach 是无意义的，目前 forceGuardEach 仅支持在非h5端上使用");var o=u.getUniCachePage(0);0===Object.keys(o).length&&e.options.routerErrorEach({type:3,NAVTYPE:t,uniActualData:{},level:0,msg:"不存在的页面栈，请确保有足够的页面可用，当前 level:0"},e);var n=o,a=n.route,i=n.options;s({path:"/"+a,query:u.deepDecodeQuery(i||{})},e,t,r)},t.createRoute=v},922:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resetPageHook=t.resetAndCallPageHook=t.proxyPageHook=t.createFullPath=t.createToFrom=void 0;var o=r(360),n=r(974),a=r(910),i=r(25);function u(e){for(var t=e.proxyHookDeps,r=0,o=Object.entries(t.hooks);r<o.length;r++)(0,o[r][1].resetHook)()}t.createToFrom=function(e,t){var r=n.getUniCachePage(0);return"[object Array]"===n.getDataType(r)?n.deepClone(e):a.createRoute(t)},t.createFullPath=function(e,t){if(null==e.fullPath){var r=i.stringifyQuery(e.query);e.fullPath=e.path+r}null==t.fullPath&&(r=i.stringifyQuery(t.query),t.fullPath=t.path+r)},t.proxyPageHook=function(e,t,r){for(var n=t.proxyHookDeps,a=e.$options,i=function(i){var u=o.proxyHookName[i],l=a[u];if(l)for(var c=function(o){if(l[o].toString().includes("@TENCENT/UNI-SIMPLE-ROUTER-MP"))return"continue";var a=Object.keys(n.hooks).length+1,i=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.resetIndex.push(a),n.options[a]=e},u=l.splice(o,1,i)[0];n.hooks[a]={proxyHook:i,callHook:function(o){if(t.enterPath.replace(/^\//,"")===o.replace(/^\//,"")||"app"===r){var i=n.options[a];u.apply(e,i)}},resetHook:function(){l.splice(o,1,u)}}},p=0;p<l.length;p++)c(p)},u=0;u<o.proxyHookName.length;u++)i(u)},t.resetAndCallPageHook=function(e,t,r){void 0===r&&(r=!0);var o=t.trim().match(/^(\/?[^\?\s]+)(\?[\s\S]*$)?$/);if(null==o)throw new Error("还原hook失败。请检查 【"+t+"】 路径是否正确。");t=o[1];for(var n=e.proxyHookDeps,a=n.resetIndex,i=0;i<a.length;i++){var l=a[i];(0,n.hooks[l].callHook)(t)}r&&u(e)},t.resetPageHook=u},25:function(e,t,r){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.stringifyQuery=t.parseQuery=t.resolveQuery=t.queryPageToMap=void 0;var n=r(974),a=r(119),i=r(814),u=/[!'()*]/g,l=function(e){return"%"+e.charCodeAt(0).toString(16)},c=/%2C/g,p=function(e){return encodeURIComponent(e).replace(u,l).replace(c,",")};t.queryPageToMap=function(e,t){var r={},i="",u=e.success,l=e.fail;if("[object Object]"===n.getDataType(e)){var c=e;if(null!=c.path){var p=n.urlToJson(c.path),s=p.path,f=p.query;i=n.routesForMapRoute(t,s,["finallyPathList","pathMap"]),r=o(o({},f),e.query||{}),c.path=s,c.query=r,delete e.params}else null!=c.name?null==(i=t.routesMap.nameMap[c.name])?i=n.getWildcardRule(t,{type:2,msg:"命名路由为："+c.name+" 的路由，无法在路由表中找到！",toRule:e}):(r=e.params||{},delete e.query):i=n.getWildcardRule(t,{type:2,msg:e+" 解析失败，请检测当前路由表下是否有包含。",toRule:e})}else e=n.urlToJson(e),i=n.routesForMapRoute(t,e.path,["finallyPathList","pathMap"]),r=e.query;if("h5"===t.options.platform){n.getRoutePath(i,t).finallyPath.includes(":")&&null==e.name&&a.ERRORHOOK[0]({type:2,msg:"当有设置 alias或者aliasPath 为动态路由时，不允许使用 path 跳转。请使用 name 跳转！",route:i},t);var h=e.complete,v=e.success,y=e.fail;if("[object Function]"===n.getDataType(h)){var g=function(e,t){"[object Function]"===n.getDataType(t)&&t.apply(this,e),h.apply(this,e)};u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];g.call(this,e,v)},l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];g.call(this,e,y)}}}var d=e;return"[object Function]"===n.getDataType(d.success)&&(d.success=u),"[object Function]"===n.getDataType(d.fail)&&(d.fail=l),{rule:d,route:i,query:r}},t.resolveQuery=function(e,t){var r="query";null!=e.params&&(r="params"),null!=e.query&&(r="query");var o=n.copyData(e[r]||{}),a=t.options.resolveQuery;if(a){var u=a(o);"[object Object]"!==n.getDataType(u)?i.warn("请按格式返回参数： resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}",t):e[r]=u}else{if(!n.assertDeepObject(o))return e;var l=JSON.stringify(o);e[r]={query:l}}return e},t.parseQuery=function(e,t){var r=t.options.parseQuery;if(r)e=r(n.copyData(e)),"[object Object]"!==n.getDataType(e)&&i.warn("请按格式返回参数： parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}",t);else if(Reflect.get(e,"query")){var o=Reflect.get(e,"query");if("string"==typeof o)try{o=JSON.parse(o)}catch(e){i.warn("尝试解析深度对象失败，按原样输出。"+e,t)}if("object"==typeof o)return n.deepDecodeQuery(o)}return e},t.stringifyQuery=function(e){var t=e?Object.keys(e).map((function(t){var r=e[t];if(void 0===r)return"";if(null===r)return p(t);if(Array.isArray(r)){var o=[];return r.forEach((function(e){void 0!==e&&(null===e?o.push(p(t)):o.push(p(t)+"="+p(e)))})),o.join("&")}return p(t)+"="+p(r)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}},438:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}l((o=o.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteMethod=void 0;var a=r(296),i=r(974),u=r(814),l=r(94),c=["navigateTo","redirectTo","reLaunch","switchTab","navigateBack"],p={navigateTo:function(){},redirectTo:function(){},reLaunch:function(){},switchTab:function(){},navigateBack:function(){}};t.rewriteMethod=function(e){!1===e.options.keepUniOriginNav&&c.forEach((function(t){var r=uni[t];p[t]=r,uni[t]=function(c,p,s,f){return void 0===p&&(p=!1),o(this,void 0,void 0,(function(){return n(this,(function(o){return p?l.uniOriginJump(e,r,t,c,s,f):("app-plus"===e.options.platform&&0===Object.keys(e.appMain).length&&(e.appMain={NAVTYPE:t,path:c.url}),function(e,t,r){if("app-plus"===r.options.platform){var o=null;e&&(o=e.openType),null!=o&&"appLaunch"===o&&(t="reLaunch")}if("reLaunch"===t&&'{"url":"/"}'===JSON.stringify(e)&&(u.warn("uni-app 原生方法：reLaunch({url:'/'}) 默认被重写啦！你可以使用 this.$Router.replaceAll() 或者 uni.reLaunch({url:'/?xxx=xxx'})",r),t="navigateBack",e={from:"backbutton"}),"navigateBack"===t){var n=1;null==e&&(e={delta:1}),"[object Number]"===i.getDataType(e.delta)&&(n=e.delta),r.back(n,e)}else{var l=a.rewriteMethodToggle[t],c=e.url;if(!c.startsWith("/")){var p=i.resolveAbsolutePath(c,r);c=p,e.url=p}if("switchTab"===t){var s=i.routesForMapRoute(r,c,["pathMap","finallyPathList"]),f=i.getRoutePath(s,r).finallyPath;if("[object Array]"===i.getDataType(f)&&u.warn("uni-app 原生方法跳转路径为："+c+"。此路为是tab页面时，不允许设置 alias 为数组的情况，并且不能为动态路由！当然你可以通过通配符*解决！",r),"*"===f&&u.warn("uni-app 原生方法跳转路径为："+c+"。在路由表中找不到相关路由表！当然你可以通过通配符*解决！",r),"h5"===r.options.platform){var h=e.success;e.success=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];null==h||h.apply(null,t),i.timeOut(150).then((function(){var t=e.detail||{};if(Object.keys(t).length>0&&Reflect.has(t,"index")){var r=i.getUniCachePage(0);if(0===Object.keys(r).length)return!1;var o=r,n=o.$options.onTabItemTap;if(n)for(var a=0;a<n.length;a++)n[a].call(o,t)}}))}}c=f}var v=e,y=v.events,g=v.success,d=v.fail,m=v.complete,b=v.animationType,O={path:c,events:y,success:g,fail:d,complete:m,animationDuration:v.animationDuration,animationType:b};r[l](i.notDeepClearNull(O))}}(c,t,e)),[2]}))}))}}))}},124:function(e,t,r){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=void 0;var n=r(360),a=r(974),i=r(727),u=r(412),l=r(910),c=r(438),p=function(){},s=new Promise((function(e){return p=e}));t.createRouter=function(e){var t=a.assertNewOptions(e),r={options:t,mount:[],runId:0,Vue:null,proxyHookDeps:n.proxyHookDeps,appMain:{},enterPath:"",$route:null,$lockStatus:!1,routesMap:{},lifeCycle:i.registerRouterHooks(n.lifeCycle,t),push:function(e){l.lockNavjump(e,r,"push")},replace:function(e){l.lockNavjump(e,r,"replace")},replaceAll:function(e){l.lockNavjump(e,r,"replaceAll")},pushTab:function(e){l.lockNavjump(e,r,"pushTab")},back:function(e,t){void 0===e&&(e=1),"[object Object]"!==a.getDataType(t)?t={from:"navigateBack"}:Reflect.has(t,"from")||(t=o(o({},t),{from:"navigateBack"})),l.lockNavjump(e+"",r,"back",void 0,t)},forceGuardEach:function(e,t){l.forceGuardEach(r,e,t)},beforeEach:function(e){i.registerEachHooks(r,"beforeHooks",e)},afterEach:function(e){i.registerEachHooks(r,"afterHooks",e)},install:function(e){r.Vue=e,c.rewriteMethod(this),u.initMixins(e,this),Object.defineProperty(e.prototype,"$Router",{get:function(){var e=r;return Object.defineProperty(this,"$Router",{value:e,writable:!1,configurable:!1,enumerable:!1}),Object.seal(e)}}),Object.defineProperty(e.prototype,"$Route",{get:function(){return l.createRoute(r)}}),Object.defineProperty(e.prototype,"$AppReady",{get:function(){return"h5"===r.options.platform?Promise.resolve():s},set:function(e){!0===e&&p()}})}};return a.def(r,"currentRoute",(function(){return l.createRoute(r)})),r.beforeEach((function(e,t,r){return r()})),r.afterEach((function(){})),r}},94:function(e,t,r){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}l((o=o.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},i=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.formatOriginURLQuery=t.uniOriginJump=void 0;var u=r(25),l=r(974),c=r(360),p=r(922),s=0,f="reLaunch";function h(e,t,r){var n,a=t.url,i=t.path,c=t.query,p=t.animationType,s=t.animationDuration,f=t.events,h=t.success,v=t.fail,y=t.complete,g=t.delta,d=t.animation,m=u.stringifyQuery(c||{}),b=""===m?i||a:(i||a)+m,O={};return"app-plus"===e.options.platform&&"navigateBack"!==r&&(O=(null===(n=e.options.APP)||void 0===n?void 0:n.animation)||{},O=o(o({},O),d||{})),l.notDeepClearNull({delta:g,url:b,animationType:p||O.animationType,animationDuration:s||O.animationDuration,events:f,success:h,fail:v,complete:y})}t.uniOriginJump=function(e,t,r,u,v,y){var g=h(e,u,r),d=g.complete,m=i(g,["complete"]),b=e.options.platform;null!=y&&!1===y?(0===s&&(s++,"h5"!==b&&(p.resetAndCallPageHook(e,m.url),e.Vue.prototype.$AppReady=!0)),d&&d.apply(null,{msg:"forceGuardEach强制触发并且不执行跳转"}),v&&v.apply(null,{msg:"forceGuardEach强制触发并且不执行跳转"})):(0===s&&("app-plus"===b?p.resetAndCallPageHook(e,m.url):new RegExp(c.mpPlatformReg,"g").test(b)&&p.resetAndCallPageHook(e,m.url,!1)),t(o(o({},m),{from:u.BACKTYPE,complete:function(){for(var t,o,i,u,h=[],y=0;y<arguments.length;y++)h[y]=arguments[y];return n(this,void 0,void 0,(function(){var n,y,g;return a(this,(function(a){switch(a.label){case 0:return 0===s&&(s++,"h5"!==b&&(new RegExp(c.mpPlatformReg,"g").test(b)&&p.resetPageHook(e),e.Vue.prototype.$AppReady=!0,"app-plus"===b&&((n=plus.nativeObj.View.getViewById("router-loadding"))&&n.close(),(y=null===(t=e.options.APP)||void 0===t?void 0:t.launchedHook)&&y()))),g=0,new RegExp(c.mpPlatformReg,"g").test(b)?g=null===(o=e.options.applet)||void 0===o?void 0:o.animationDuration:"app-plus"===b&&"navigateBack"===r&&"navigateTo"===f&&(g=null===(u=null===(i=e.options.APP)||void 0===i?void 0:i.animation)||void 0===u?void 0:u.animationDuration),"navigateTo"!==r&&"navigateBack"!==r||0===g?[3,2]:[4,l.timeOut(g)];case 1:a.sent(),a.label=2;case 2:return f=r,d&&d.apply(null,h),v&&v.apply(null,h),[2]}}))}))}})))},t.formatOriginURLQuery=h},534:e=>{e.exports=require("@tencent/t-comm/lib/router/path-to-regexp")}},t={};return function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(230)})()}));