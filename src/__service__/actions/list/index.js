/**
 * @file 定义action列表
 * @explain 触发actions状态
 */

import {
    __ADMIN__LIST,
    __ADMIN__LIST__REDUCERS,
    __ADMIN__LIST__FILTER
} from '../../namespace/list';

export const modAction = data => {
    return {
        type: __ADMIN__LIST, // type为标识，通过不同的标识执行对应的逻辑
        payload: { // 定义的是reducers中payload的值
            num: data
        }
    }
}

export const listReducersAction = data => {
    return {
        type: __ADMIN__LIST__REDUCERS,
        payload: {
            num: data
        }
    }
}

export const filterAction = data => {
    return {
        type: __ADMIN__LIST__FILTER,
        payload: {
            num: data
        }
    }
}
