import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import propTypes from 'prop-types';

import './index.scss';

class About extends React.Component {
  constructor(arg) {
    super(arg);

    // constructor可以替代WillUnmount  做一些准备工作

    this.state = {
      color: ''
    }
    this.timer = null;
  }

  // 还有一种传参是下载events包，听过派发事件，监听事件来传参

  // context传参  api写法已经过期

  // 声明组件支持context传参  这里定义类型就可取值
  // static contextTypes = {
  //   c: propTypes.bool,
  //   u: propTypes.number
  // }
  // static propTypes = {
  //   a: propTypes.bool,
  //   b: propTypes.func.isRequired
  // }

  // static defaultProps = {
  //   a: false,
  //   b(){}
  // }

  componentDidMount() {
    console.log(`%c${JSON.stringify(this.context)}`, 'background: red;border-radius: 2px;'); // 取context参数
  }

  getSnapshotBeforeUpdate() {
    return {
      flag: true
    }
  }

  componentDidUpdate(_a, _b, before) {

  }

  clk() {
    this.forceUpdate(); // this上自身挂载的强制视图更新函数
  }

  render() {
    console.log('render');

    return <>
      <Router>
          {/* this.history.goBack()和this.history.go()不能回退子路由吗 只能回退一级路由？ */}
        <Link to='/setting'>跳转setting页</Link>
        
        {/* <Switch> */}
          {/* <Route path='/about/aaa' Component={About}></Route> */}
        {/* </Switch> */}
      </Router>

      <div className='container'>
          首页
          <div onClick={() => this.clk()}>点击</div>
      </div>
    </>
  }
}

// 相当于在内部的 static静态方法和属性，自己本身的东西
// About.propTypes = {
//   a: propTypes.bool,
//   b: propTypes.func.isRequired
// }

// About.defaultProps = {
//   a: true,
//   b(){}
// }

export default About;
