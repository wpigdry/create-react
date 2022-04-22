/**
 * @file List高阶组件--接收redux数据
 */

import {
    connect
} from 'react-redux';

import List from '../../components/list/index';

import {modAction} from '../../actions/list';
import {__ADMIN__LIST} from '../../namespace/list';

// 可以接收到Provider的store灌下的数据，从而传给被包裹的组件，不被包裹组件的props是没有数据的
// 源码中设置connect第一个参数直接接收redux中的state
const mapStateToProps = state => {
    console.log(state, 'list-state');
    return {...state.__service__.list.listReducers}; // return一个新对象
}

// 定义事件
// 组件接收调用，改变reducers的数据，然后再通过顶层数据下灌
const mapStateDispatchToProps = (dispatch, props) => {

    // state是公有的（不论合并了多少次reducers，都会共有），取值可以分reducers取(比如list. nav.)，但是return的方法是每个connect组件私有的，不进行共享
    return {
        add(num) {
            // dispatch触发时所有组件对应的reducers都会执行，reducers根据action来执行逻辑，所以要保证action的唯一性正确性
            dispatch(modAction(++num)); // dispatch执行的action和reducers的action相对应

            // dispatch接收一个对象  type对应的action传入payload对应的数据
            // dispatch({type: __ADMIN__LIST, payload: {num: 6}})
        },
        subtract(num) {
            dispatch(modAction(--num));

            // dispatch({type: 'b', payload: {a: 2}})
        },
        listHandel() {
            
        }
    }
}

// 每次调用mapStateDispatchToProps的方法后再把改变的state传入包裹的List组件
export default connect(mapStateToProps, mapStateDispatchToProps)(List);
