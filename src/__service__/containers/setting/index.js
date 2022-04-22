import {
    connect
} from 'react-redux';

import Setting from '../../components/setting/index';

// 可以接收到Provider的store灌下的数据，从而传给被包裹的组件，不被包裹组件的props是没有数据的
// 源码中设置connect第一个参数直接接收redux中的state
const mapStateToProps = state => {
    return state;
}

// 定义事件
// 组件接收调用，改变reducers的数据，然后再通过顶层数据下灌
const mapStateDispatchToProps = (dispatch, props) => {
    return {
    }
}

// 每次调用mapStateDispatchToProps的方法后再把改变的state传入包裹的List组件
export default connect(mapStateToProps, mapStateDispatchToProps)(Setting);
