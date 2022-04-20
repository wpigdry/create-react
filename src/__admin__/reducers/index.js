/**
 * @file 定义reducers，返回给createStore创建
 * @explain 定义不同的action执行对应的逻辑
 */

import {__ADMIN__LIST} from '../namespace';

const initState = {
    num: 1
}

const reducers = (state = initState, {type, payload = {}}) => {
    // 可以接收到connect传入的type
    // connect时调用dispatch反传入数据
    console.log(payload, 'payload');
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
