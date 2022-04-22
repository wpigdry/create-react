/**
 * @file 合并reducers
 * @explain 返回给reducers文件再次合并
 */

import {combineReducers} from 'redux';
import listReducers from './list';
import filter from './filter';

export default combineReducers({
    listReducers,
    filter
});
