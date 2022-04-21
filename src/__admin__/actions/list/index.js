/**
 * @file 定义action列表
 * @explain 触发actions状态
 */

import {__ADMIN__LIST} from '../../namespace';

export const modAction = data => {
    return {
        type: __ADMIN__LIST, // type为标识，通过不同的标识执行对应的逻辑
        payload: { // 定义的是reducers中payload的值
            num: data
        }
    }
}
