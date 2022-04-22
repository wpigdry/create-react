import React from 'react';
import {Provider} from 'react-redux'; // react-redux对redux进行处理，提供组件   redux提供方法
import store from './store.js';

import List from './__admin__/containers/list';
import Setting from './__admin__/components/setting';
import Nav from './__admin__/containers/nav';


class App extends React.Component {
    state = {
        b: ['2']
    }
    clkHandel() {
        this.setState({
            b: ['3']
        })
    }
    render() {
        const {b} = this.state;
        return (<div>
            {/* 注入redux状态 */}
            {/* store来自redux的createStore函数的返回，通过Provider组件灌入 */}
            <Provider store={store}>
                <div>
                    <button onClick={this.clkHandel.bind(this)}>父组件点击</button>
                    <div>{b.a}</div>
                    <List b={b}></List>
                    <List b={b}></List>
                    <Setting></Setting>
                    <Nav/>
                </div>
                
            </Provider>
        </div>)
    }
}

export default App;
