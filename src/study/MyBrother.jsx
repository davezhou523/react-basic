import {useState} from "react";

export default function MyParent(){
   const [name,setname]= useState('')
    function fnName(subParams) {
        setname(subParams)
    }
    return (<div>
        <p>this is parent</p>
        
        <A fnName={fnName}></A>
        <B getSubName={name}></B>
    </div>)
}
//兄弟组件传参数
function A(props) {
    const name='i from a componment'
    return (<div>
        <p>this is a</p>
        <button onClick={()=>props.fnName(name)}>send msg to B</button>
    </div>)
}
function B(props) {
    return (<div>
        <p>this is b</p>
        <p>{props.getSubName}</p>
    </div>)
}