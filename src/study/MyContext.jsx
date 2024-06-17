import {createContext,useContext} from "react";
//1 createContext 创建对象
const MsgCtx=createContext();
export default function MyParent(){
   // const [name,setname]= useState('')
    function fnName(subParams) {
        // setname(subParams)
    }
    const msg='this is parent msg';
    return (<div>
        {/*2 在顶层组件通过Provider组件提供数据 ，使用value属性传参数*/}
        <MsgCtx.Provider value={msg}>
            <p>this is parent</p>

            <A fnName={fnName}></A>
        </MsgCtx.Provider>
    </div>)
}

function A(props) {
    const name='i from a componment'
    return (<div>
        <p>this is a</p>
        <B></B>
    </div>)
}
function B(props) {
    {/*在底层组件 通过useContext 钩子函数使用数据*/}
    const parentMsg=useContext(MsgCtx)
    return (<div>
        <p>this is b  {parentMsg}</p>

    </div>)
}