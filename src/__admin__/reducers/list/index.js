/**
 * @file 定义reducers，返回给createStore创建状态管理树
 * @explain 管理actions状态--定义不同的action执行对应的逻辑
 */

import {__ADMIN__LIST} from '../../namespace';

const initState = {
    num: 1
}

const reducers = (state = initState, {type, payload = {}}) => {
    // 可以接收到connect传入的type
    // connect时调用dispatch反传入数据
    // 如果reducers没有隔离，则payload所有connect包裹的组件共享
    console.log(payload, 'list--payload');
    const {
        num
    } = payload

    switch (type) {
        case __ADMIN__LIST:
            return {num}; // return的数据通过store灌入下层组件，connect包裹的组件都可接收到
    
        default: return state;
    }
};

export default reducers;
