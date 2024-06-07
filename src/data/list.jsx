import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    //绑定事件
    const myClick = () => {
        window.alert("my click1")
    };
    //条件渲染
    const renderTitle=(key)=>{
        if (key>1){
            return <span>i am title 1</span>
        }else{
            return <span>i am title 2</span>
        }
    }
    //列表渲染
    const arr=["a","b","c"];
    return (
        <div>

                <ul>
                    {arr.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            <p>{renderTitle(0)}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/*myClick() 函数加括号页面渲染时直接运行函数，无需点击按钮*/}
            <p><button onClick={myClick}>my button</button></p>
        </div>
    );
};

MyComponent.propTypes = {
    initialCount: PropTypes.number.isRequired,
};

MyComponent.defaultProps = {
    initialCount: 0,
};

// export default React.memo(MyComponent);
export default MyComponent;
