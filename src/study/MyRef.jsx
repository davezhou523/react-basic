import  {useRef,useState,useEffect} from "react";

function PreValueByRef() {
    const ref = useRef();
    const [count,setCount]=useState(0)
   useEffect(function () {
        ref.current=count;
       console.log("ref.current has changed:", count);
       console.log("Count has changed:", count);
       const timer=setTimeout(()=>{
           console.log("This will run after 1 second");
       },1000)
       return ()=>{
           //useEffect 可以返回一个函数，这个函数会在组件卸载或者依赖发生变化时执行，
           // 常用于清除副作用，如事件监听、定时器等：
           clearTimeout(timer);
       }
   },[count])
    useEffect(() => {
        console.log("run once");
    }, []);

    return <div>
        <p>preCount:{ref.current}</p>
        <p>count:{count}</p>
        <p>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </p>
    </div>
}
export default PreValueByRef;