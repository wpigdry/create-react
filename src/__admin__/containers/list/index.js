/**
 * @file List组件--接收redux数据
 */

import {
    connect
} from 'react-redux';

import List from '../../components/list/index';

import {modAction} from '../../actions/list';
import {__ADMIN__LIST} from '../../namespace';

// 可以接收到Provider的store灌下的数据，从而传给被包裹的组件，不被包裹组件的props是没有数据的
// 源码中设置connect第一个参数直接接收redux中的state
const mapStateToProps = state => {
    return state;
}

// 定义事件
// 组件接收调用，改变reducers的数据，然后再通过顶层数据下灌
const mapStateDispatchToProps = (dispatch, props) => {
    return {
        add(num) {
            dispatch(modAction(++num)); // dispatch执行的action和reducers的action相对应

            // dispatch接收一个对象  type对应的action传入payload对应的数据
            // dispatch({type: __ADMIN__LIST, payload: {num: 6}})
        },
        subtract(num) {
            dispatch(modAction(--num));

            // dispatch({type: 'b', payload: {a: 2}})
        }
    }
}

// 每次调用mapStateDispatchToProps的方法后再把改变的state传入包裹的List组件
export default connect(mapStateToProps, mapStateDispatchToProps)(List);
