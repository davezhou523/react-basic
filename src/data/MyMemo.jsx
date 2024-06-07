import { useState,memo } from "react";
import { Card, Button } from "antd";

 function MyChildComponent(props) {
    console.log("ChildComponent render");
    return <p>{props.text}</p>;
}
//React.memo 的工作原理是对组件的 props 进行浅比较。如果传递给组件的 props 没有发生变化，
// React.memo 会复用上一次的渲染结果，从而避免不必要的渲染。
const MyChildComponentByMemo=memo(MyChildComponent);
function MyParentComponent() {
    const [count, setCount] = useState(0);

    return (
        <Card>
            <p>Current count: {count}</p>
                <Button type="primary" onClick={()=>setCount(count+1)}>increment</Button>
                {/*每次ParentComponent的状态发生变化时，ChildComponent都会进行不必要的渲染，即使它接收的 props 完全相同。*/}
                {/*<MyChildComponent text="我是子组件，请在控制台查看"></MyChildComponent>*/}
                <MyChildComponentByMemo text="我是memo子组件，请在控制台查看"></MyChildComponentByMemo>
        </Card>
    );
}

export default MyParentComponent;

