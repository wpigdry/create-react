import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import propTypes from 'prop-types';

import './index.scss';

class About extends React.Component {
  constructor(arg) {
    super(arg);

    this.state = {
      color: ''
    }
    this.timer = null;
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
    this.getRandomColor();
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  getRandomColor = () =>{   
      this.timer && clearTimeout(this.timer);

      const r = Math.floor(Math.random()*255);
      const g = Math.floor(Math.random()*255);
      const b = Math.floor(Math.random()*255);
      const color = 'rgba('+ r +','+ g +','+ b +',0.9)';
      console.log(color);
      this.setState({
        color
      });

      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.getRandomColor();
      }, 300);
  }

  render() {
    const {color} = this.state;
    return <>
      <Router>
          {/* this.history.goBack()和this.history.go()不能回退子路由吗 只能回退一级路由？ */}
        {/* <Link to='/setting'>跳转setting页</Link> */}
        
        {/* <Switch> */}
          {/* <Route path='/about/aaa' Component={About}></Route> */}
        {/* </Switch> */}
      </Router>

      <div className='container' style={{color: `${color}`}}>
        王婧要每天快乐，每天开心！阳光洒落你身。
      </div>
    </>
  }
}

// 相当于在内部的 static静态方法和属性，自己本身的东西
About.propTypes = {
  a: propTypes.bool,
  b: propTypes.func.isRequired
}

About.defaultProps = {
  a: true,
  b(){}
}

export default About;
