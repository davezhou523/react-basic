import {useDispatch,useSelector} from "react-redux";
//导入actionCreater
import {increment,decrement,addNum} from "../store/modules/counterStore";
import {fetchChannelList} from "../store/modules/channelStore";
import {useEffect} from "react";

const MyStore=function () {
    ////react 组件中使用store中数据，使用useSelector钩子函数把store中的数据映射到组件中
    const {count} =useSelector(state => state.mycounter)
    const {channelList}=useSelector(state=>state.mychannel)
    console.log(fetchChannelList())
    //使用useDispath（）修改store内容，调用store中action对象的方法
    const dispatch=useDispatch()
    //使用useEffect 触发异步请求执行
    useEffect(()=>{
        dispatch(fetchChannelList())
    },[dispatch])
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            {count}
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(addNum(10))}>add 10</button>
            <button onClick={()=>dispatch(addNum(20))}>add 20</button>
            <br></br>
            <ul>
                {channelList.map((item)=><li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}
export default MyStore
