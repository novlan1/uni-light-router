import {RoutesRule, Router, routesMapRule} from '../options/base';
import {H5Config} from '../options/config';
import {warn} from './warn'
import {getRoutePath} from './utils'

export function createRouteMap(
    router: Router,
    routes: RoutesRule[],
): routesMapRule|never {
    const routesMap:routesMapRule = {
        finallyPathList: [],
        finallyPathMap: Object.create(null),
        aliasPathMap: Object.create(null),
        pathMap: Object.create(null),
        vueRouteMap: Object.create(null),
        nameMap: Object.create(null)
    }
    routes.forEach(route => {
        const { finallyPath, aliasPath, path} = getRoutePath(route, router);
        if (path == null) {
            let error = 'error'
            // #ifndef MP
            error = `请提供一个完整的路由对象，包括以绝对路径开始的 ‘path’ 字符串 ${JSON.stringify(route)}`
            // #endif
            throw new Error(error);
        }
        if (finallyPath instanceof Array) {
            if (!(router.options.h5 as H5Config).vueRouterDev && router.options.platform === 'h5') {
                let error = 'error'
                // #ifndef MP
                error = `非 vueRouterDev 模式下，route.alias 目前无法提供数组类型！ ${JSON.stringify(route)}`
                // #endif
                throw new Error(error);
            }
        }
        const strFinallyPath = (finallyPath as string);
        const strAliasPath = (aliasPath as string);
        if (router.options.platform !== 'h5') {
            if (strFinallyPath.indexOf('/') !== 0 && path !== '*') {
                // #ifndef MP
                warn(`当前路由对象下，route：${JSON.stringify(route)} 是否缺少了前缀 ‘/’`, router, true);
                // #endif
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
    })

    return routesMap;
}
