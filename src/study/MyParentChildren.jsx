import {Button} from "antd";
import {useState} from "react";

const ParentCompoment=()=>{
    const [sub,setSub]=useState('');
    let name="this is parentComponment";
    let htmlP= <p style={{color:"red"}}>abc</p>
    function childrenToParent(subParams){
        setSub(subParams)
    }
    return (<div>
        {/*父组件参数传递给子组件：1、在调用子组件绑定自定义属性name*/}

        <ChildrenComponment name={name} htmlP={htmlP} childrenfn={childrenToParent}></ChildrenComponment>
        <p>获取子传给父参数:{sub}</p>
    </div>);

}

//子组件接受父组件形参数 propos,只能读取不能修改
const ChildrenComponment = (propos) => {
console.log(propos);
// propos.name="aa"
    const sub="this is sub";
    //子传参数给父组件
return (
    <div>
        this is children commponment:<p>{propos.name}</p>{propos.htmlP}
        <Button onClick={()=>propos.childrenfn(sub)}>子参数传父</Button>
    </div>
)
}

export default ParentCompoment;
