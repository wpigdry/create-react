/**
 * @file List高阶组件--接收redux数据
 */

 import {
    connect
} from 'react-redux';

import Nav from '../../components/nav/index';

import {modAction} from '../../actions/nav';

const mapStateToProps = state => {
    return state;
}

const mapStateDispatchToProps = (dispatch, props) => {
    return {
        add(num) {
            dispatch(modAction(++num));
        },
        subtract(num) {
            dispatch(modAction(--num));

            // dispatch({type: 'b', payload: {a: 2}})
        }
    }
}

// 每次调用mapStateDispatchToProps的方法后再把改变的state传入包裹的List组件
export default connect(mapStateToProps, mapStateDispatchToProps)(Nav);
