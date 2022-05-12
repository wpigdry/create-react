import React from 'react';

class List extends React.PureComponent {
    // PureComponent
    // 每次更新自身的state和父组件的props会浅对比（复杂数据类型比如object array则不生效，因为不是同一个引用，堆中的地址变了），无变化不更新
    // 即使父组件渲染，子组件状态不变化也不会更新
    // connect包裹组件后，即使父组件更新自身也不会重新render(不管有无用PureComponent)，只有redux的state和和方法也就是传给组件的props变化才会render
    // 如没有connect包裹，父组件更新时自身使用了PureComponent才不会更新(传入的props和自身的state无变化的情况)
    // 最佳情况下用来做展示组件
    state = {
        count: 0
    }

    clk () {
        let count = this.state.count;
        this.setState({
            count: ++count
        })
    }

    // 事件和值包括请求都不在组件内定义，移交到redux中
    render() {
        // this.props 直接取redux数据取不到  通过connect注册组件导入数据才可
        console.log(this.props, 'list组件props');
        const {
            num,
            add,
            subtract
        } = this.props;
        const {
            count
        } = this.state;

        return (<div>
            list组件
            <button onClick={this.clk.bind(this)}>点击</button>
            <div>{count}</div>
            <div onClick={() => {
                add(num);
            }}>增加num</div>
            <div onClick={() => {
                subtract(num);
            }}>增加num</div>
            <div>{num}</div>
        </div>)
    }
}

export default List;
