import {configureStore} from "@reduxjs/toolkit";
//导入子模块reducer
import counterStore from "./modules/counterStore";
//创建根store 组合子模块
 const store=configureStore({
    reducer:{
        mycounter:counterStore
    }
})
export default store;
