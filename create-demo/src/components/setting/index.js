import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import propTypes from 'prop-types';

import style from './index.scss';

class About extends React.Component {
  constructor(arg) {
    super(arg);

    this.state = {
      color: ''
    }
    this.timer = null;
  }

  // 还有一种传参是下载events包，听过派发事件，监听事件来传参

  // 声明组件支持context传参  这里定义类型就可取值
  static contextTypes = {
    c: propTypes.bool,
    u: propTypes.number
  }
  // static propTypes = {
  //   a: propTypes.bool,
  //   b: propTypes.func.isRequired
  // }

  // static defaultProps = {
  //   a: false,
  //   b(){}
  // }

  componentDidMount() {
    console.log(this);
  }

  componentWillUnmount() {
  }

  render() {
    return <>
      <Router>
          {/* this.history.goBack()和this.history.go()不能回退子路由吗 只能回退一级路由？ */}
        <Link to='/setting'>跳转setting页</Link>
        
        {/* <Switch> */}
          {/* <Route path='/about/aaa' Component={About}></Route> */}
        {/* </Switch> */}
      </Router>

      <div className={style.container}>
          首页
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
