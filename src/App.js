import React from 'react';
import {Provider} from 'react-redux';
class App extends React.Component {
    render() {
        return (<div>
            {/* 注入redux状态 */}
            <Provider>

            </Provider>
        </div>)
    }
}

export default App;
