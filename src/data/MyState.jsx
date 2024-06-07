import {useState,useEffect} from "react";
const MyState=()=>{
    //变量数据变化，页面渲染数据，使用useState
    const [count,setCount] = useState(0);
    const [name,setName] = useState("dave");
    //useEffect()当提供一个依赖数组[count]时，只有当数组中的值发生变化时，useEffect 才会执行：
    useEffect(()=>{
        document.title=`Count:${count}`;
        console.log("页面渲染后回调useEffect count:"+count);
        // console.log("页面渲染后回调useEffect name:"+name);

    },[count]);

    const handleClick=(name,event)=>{
        console.log(name+"变量数据变化，页面渲染数据"+count+"event:"+event);
        setCount(count+1);
    };
    const handleNameClick=()=>{
        console.log("变量数据变化，页面渲染数据"+name);
        setName("jack"+count);
    };

    return(<div>
        <button onClick={handleNameClick}>click me name {name}</button>
        {/*传递自定义参数用箭头函数,还传e*/}
        <button onClick={(event)=>handleClick('jack',event)}>click me count {count}</button>
    </div>)
}
export default MyState
