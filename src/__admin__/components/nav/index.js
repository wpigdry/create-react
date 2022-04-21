import React, {useState} from 'react';

const Nav = props => {
    console.log(props, 'nav--props');
    const {
        num,
        add,
        subtract
    } = props;
    const [count, setCount] = useState(1);
    const clk = () => {
        let counts = count;
        setCount(++counts)
    }
    
    return (<div>
        nav组件
        <button onClick={clk}>点击</button>
            <div>{count}</div>
            <div onClick={() => {
                add(num);
            }}>增加num</div>
            <div onClick={() => {
                subtract(num);
            }}>增加num</div>
            <div>{num}</div>
    </div>)
};

export default Nav;
