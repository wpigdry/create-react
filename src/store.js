/**
 * @file 创建store
 */

import {createStore, combineReducers} from 'redux'; // 如果直接变量名接收，打印为undefined, 则文件不是export default抛出的，是export抛出，需要解构取值
// combineReducers 用来合并reducers
import reducers from './__admin__/reducers/index';

// 调用reducers的纯函数
export default createStore(reducers);
