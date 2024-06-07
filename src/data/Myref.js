import {useEffect, useRef, useState} from "react";
import {Button, Card, Input, Space} from "antd";

function TextInputWithFocus() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };
    return (
        <Card title="案例 demo">
            <Space>
                <Input ref={inputEl} placeholder="click button" />
                <Button onClick={onButtonClick} type="primary">
                    Focus the input
                </Button>
            </Space>
        </Card>
    );
}
// useRef 如何在 React 中用于跟踪上一次的值
//不要在 渲染期间 读取或写入 ref 会破坏这些预期行为。
//可以在 事件处理程序或者 Effect 中读取和写入 ref。
//如果不得不在渲染期间读取 或者写入，那么应该 使用 state 代替。
export function PreValueByRef(){
    const[count,setCount]=useState(0);
    const preValueRef=useRef();
    console.log(preValueRef);
    // 🚩 不要在渲染期间写入 ref
    // myRef.current = 123;
    useEffect(() => {
        preValueRef.current=count
    }, [count]);

   return <Card title="useRef 跟踪上一次的值">
       <p>current count:{count}</p>
       <p>pre  count:{preValueRef.current}</p>
       <Button onClick={()=>setCount(count+1)} type="primary">Increment</Button>
   </Card>
}
export default TextInputWithFocus;
