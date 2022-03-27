import React from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

class About extends React.Component {
  render() {
    return <>
    iii
      <Router>
          about页面
          {/* this.history.goBack()和this.history.go()不能回退子路由吗 只能回退一级路由？ */}
        <Link to='/'>跳转首页</Link>
        
        {/* <Switch> */}
          {/* <Route path='/about/aaa' Component={About}></Route> */}
        {/* </Switch> */}
      </Router>
    </>
  }
}

export default About;
