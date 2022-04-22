/**
 * @file reducers根文件
 * @explain 合并业务线reducers
 */
import {combineReducers} from 'redux';
import __admin__ from './__admin__/reducers';
import __service__ from './__service__/reducers';

export default combineReducers({
    __admin__,
    __service__
})
