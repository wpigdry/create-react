import React from 'react';
import {Provider} from 'react-redux'; // react-redux对redux进行处理，提供组件   redux提供方法
import store from './store.js';

import List from './__admin__/containers/list';
import Setting from './__admin__/containers/setting';

class App extends React.Component {
    render() {
        return (<div>
            {/* 注入redux状态 */}
            {/* store来自redux的createStore函数的返回，通过Provider组件灌入 */}
            <Provider store={store}>
                <div>
                    ff
                    <List></List>
                    <Setting></Setting>
                </div>
                
            </Provider>
        </div>)
    }
}

export default App;
