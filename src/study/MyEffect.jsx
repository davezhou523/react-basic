import {useEffect, useState} from "react";
const url='https://geek.itheima.net/v1_0/channels';
export default function MyParent(){
    const [list,setList]=useState([])
    useEffect(()=>{
        async function getList(){
            const res=await fetch(url)
            const jsonRes =await res.json()
            console.log(jsonRes)
            setList(jsonRes.data.channels)
        }
        getList()
    },[])

    return (
        <div>
            <p>this is parent</p>
            <ul>
                {list.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}
