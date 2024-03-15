
declare interface AppConfig {
    registerLoadingPage?: boolean;
    loadingPageStyle?: () => object;
    loadingPageHook?: (view: any) => void;
    launchedHook?: () => void;
    animation?: startAnimationRule;
}

declare interface appletConfig {
    animationDuration?: number;
}

declare type backTypeRule = 'backbutton' | 'navigateBack';

export declare function createRouter(params: InstantiateConfig): Router;

declare interface debuggerArrayConfig {
    error?: boolean;
    warn?: boolean;
    log?: boolean;
}

declare type debuggerConfig = boolean | debuggerArrayConfig;

declare type endAnimationType = 'slide-out-right' | 'slide-out-left' | 'slide-out-top' | 'slide-out-bottom' | 'pop-out' | 'fade-out' | 'zoom-in' | 'zoom-fade-in' | 'none';

declare type guardHookRule = (to: totalNextRoute, from: totalNextRoute, next: (rule?: navtoRule | false) => void) => void;

declare interface H5Config {
    paramsToQuery?: boolean;
    vueRouterDev?: boolean;
    vueNext?: boolean;
    mode?: string;
    base?: string;
    linkActiveClass?: string;
    linkExactActiveClass?: string;
    scrollBehavior?: Function;
    fallback?: boolean;
}

declare interface h5NextRule {
    fullPath?: string | undefined;
    hash?: string | undefined;
    matched?: Array<object>;
    meta?: object;
    name?: undefined | string;
    type?: undefined | string;
}

declare type hookListRule = Array<(router: Router, to: totalNextRoute, from: totalNextRoute, toRoute: RoutesRule, next: Function) => void>;

declare type hookRule = (args: Array<any>, next: (args: Array<any>) => void, router: Router) => void;

declare interface InstantiateConfig {
    [key: string]: any;
    keepUniOriginNav?: boolean;
    platform: platformRule;
    h5?: H5Config;
    APP?: AppConfig;
    applet?: appletConfig;
    beforeProxyHooks?: proxyHooksConfig;
    debugger?: debuggerConfig;
    routerBeforeEach?: (to: navtoRule, from: navtoRule, next: (rule?: navtoRule | false) => void) => void;
    routerAfterEach?: (to: navtoRule, from: navtoRule, next?: Function) => void;
    routerErrorEach?: (error: navErrorRule, router: Router) => void;
    resolveQuery?: (jsonQuery: objectAny) => objectAny;
    parseQuery?: (jsonQuery: objectAny) => objectAny;
    detectBeforeLock?: (router: Router, to: string | number | totalNextRoute | navRoute, navType: NAVTYPE) => void;
    routes: RoutesRule[];
}

declare interface LifeCycleConfig {
    beforeHooks: hookListRule;
    afterHooks: hookListRule;
    routerBeforeHooks: hookListRule;
    routerAfterHooks: hookListRule;
    routerErrorHooks: Array<(error: navErrorRule, router: Router) => void>;
}

declare interface navErrorRule {
    type: navRuleStatus;
    msg: string;
    to?: totalNextRoute;
    from?: totalNextRoute;
    nextTo?: any;
    [propName: string]: any;
}

declare interface navRoute extends h5NextRule, navtoRule {
}

declare type navRuleStatus = 0 | 1 | 2 | 3;

declare interface navtoRule {
    NAVTYPE?: NAVTYPE;
    path?: string;
    name?: string | undefined;
    query?: objectAny;
    params?: objectAny;
    animationType?: startAnimationType | endAnimationType;
    animationDuration?: number;
    events?: objectAny;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

declare type NAVTYPE = 'push' | 'replace' | 'replaceAll' | 'pushTab' | 'back';

declare type objectAny = {
    [propName: string]: any;
};

declare type platformRule = 'h5' | 'app-plus' | 'app-lets' | 'mp-weixin' | 'mp-baidu' | 'mp-alipay' | 'mp-toutiao' | 'mp-qq' | 'mp-360';

declare type proxyDepsRule = {
    resetIndex: Array<number>;
    hooks: {
        [key: number]: {
            proxyHook: () => void;
            callHook: (enterPath: string) => void;
            resetHook: () => void;
        };
    };
    options: {
        [key: number]: Array<any>;
    };
};

declare interface proxyHooksConfig {
    onLaunch?: hookRule;
    onShow?: hookRule;
    onHide?: hookRule;
    onError?: hookRule;
    onInit?: hookRule;
    onLoad?: hookRule;
    onReady?: hookRule;
    onUnload?: hookRule;
    onResize?: hookRule;
    destroyed?: hookRule;
    created?: hookRule;
    beforeCreate?: hookRule;
    beforeMount?: hookRule;
    mounted?: hookRule;
    beforeDestroy?: hookRule;
}

declare type reNavMethodRule = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

declare type reNotNavMethodRule = 'navigateBack';

declare interface Router {
    readonly lifeCycle: LifeCycleConfig;
    readonly options: InstantiateConfig;
    $lockStatus: boolean;
    $route: object | null;
    enterPath: string;
    runId: number;
    Vue: any;
    appMain: {
        NAVTYPE: reNavMethodRule | reNotNavMethodRule;
        path: string;
    } | {};
    proxyHookDeps: proxyDepsRule;
    routesMap: routesMapRule | {};
    mount: Array<{
        app: any;
        el: string;
    }>;
    install(Vue: any): void;
    push(to: totalNextRoute | navRoute | string, from?: totalNextRoute): void;
    replace(to: totalNextRoute | navRoute | string, from?: totalNextRoute): void;
    replaceAll(to: totalNextRoute | navRoute | string, from?: totalNextRoute): void;
    pushTab(to: totalNextRoute | navRoute | string, from?: totalNextRoute): void;
    back(level: number | undefined, origin?: uniBackRule | uniBackApiRule): void;
    forceGuardEach(navType: NAVTYPE | undefined, forceNav: boolean): void;
    beforeEach(userGuard: guardHookRule): void;
    afterEach(userGuard: (to: totalNextRoute, from: totalNextRoute) => void): void;
}

declare interface routesMapRule {
    [key: string]: any;
    finallyPathList: Array<string>;
    finallyPathMap: RoutesRule;
    aliasPathMap: RoutesRule;
    pathMap: RoutesRule;
    nameMap: RoutesRule;
    vueRouteMap: objectAny;
}

declare interface RoutesRule {
    path: string;
    component?: object;
    name?: string;
    components?: object;
    redirect?: string | Function;
    props?: boolean | object | Function;
    aliasPath?: string;
    alias?: string | Array<string>;
    children?: Array<RoutesRule>;
    beforeEnter?: guardHookRule;
    meta?: any;
    [propName: string]: any;
}

declare interface startAnimationRule {
    animationType?: startAnimationType;
    animationDuration?: number;
}

declare type startAnimationType = 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'pop-in' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'none';

declare interface totalNextRoute extends h5NextRule, navtoRule {
    path: string;
    delta?: number;
    [propName: string]: any;
}

declare interface uniBackApiRule {
    delta?: number;
    animationDuration?: number;
    animationType?: endAnimationType;
}

declare interface uniBackRule {
    from: backTypeRule;
}

export { }
