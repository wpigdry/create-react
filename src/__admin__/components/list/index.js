import React from 'react';

class List extends React.Component {


    // 事件和值包括请求都不在组件内定义，移交到redux中
    render() {
        // this.props 直接取redux数据取不到  通过connect注册组件导入数据才可
        console.log(this.props, 'props');
        const {
            num,
            add,
            subtract
        } = this.props;

        return (<div>
            list组件
            
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
