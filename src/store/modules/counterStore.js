import {createSlice} from "@reduxjs/toolkit";

const counterStore=createSlice({
    name:"counter",
    //初始化state
    initialState:{
        count:0
    },
    //修改状态的方法 同步方法，支持直接修改
    reducers:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    }
})
//解构出来actionCreater函数
const {increment,decrement}=counterStore.actions;
//获取reduce
const reduce = counterStore.reducer
//导出actionCreater
export {increment,decrement}
//默认导出reducer
export default reduce
// counterStore.actions.increment(2)
// counterStore.caseReducers.increment(0,{type:"increment",payload:5})
