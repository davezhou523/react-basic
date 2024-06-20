import {useDispatch,useSelector} from "react-redux";
//导入actionCreater
import {increment,decrement} from "../store/modules/counterStore";

const MyStore=function () {
    ////react 组件中使用store中数据，使用useSelector钩子函数把store中的数据映射到组件中
    const {count} =useSelector(state => state.mycounter)
    //使用useDispath（）修改store内容，调用store中action对象的方法
    const dispatch=useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            {count}
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
    )
}
export default MyStore
