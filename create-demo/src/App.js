import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import Index from './components/index/index';
// 这个标签可作为空白容器   类似于包裹两个li  外界是ul标签引用此组件
// <React.Fragment></React.Fragment>  // <></>是简写 语法糖
// function App() {
//   return (
//     <div className="App">
//       app
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return <>
    {/* BrowserRouter路由不带#号，是history路由，需要配合服务端，因为history路由是get请求
      没配会报错，没报错是因为webpack内部配置处理了
     #为哈希路由 */}
      <Router>
        <Switch>
          {/* 只配置一个主页面，其他页面全在index页面下配置   为了规避exact严格匹配跳转路由中路由拼接错误的问题 */}
          <Route path='/' exact component={() => {
            return <Redirect to='/index'/>
          }}></Route>
          {/* 配置子路由时去除exact严格匹配 否则匹配不到 */}
          <Route path='/index' exact component={Index}></Route>
        </Switch>
      </Router>
    </>
  }
}

export default App;