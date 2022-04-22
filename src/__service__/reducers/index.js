/**
 * @file 整合reducers
 */

// combineReducers用于合并reducers，传给store进行创建状态树
import {combineReducers} from 'redux';
import list from './list'; // list同时也是state的key
import nav from './nav'
console.dir(combineReducers, 'combineReducers');

// 一个页面，一个reducers
export default combineReducers({
    list,
    nav
});
