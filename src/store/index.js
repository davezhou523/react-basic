import {configureStore} from "@reduxjs/toolkit";
//导入子模块reducer
import counterStore from "./modules/counterStore";
import channelStore from "./modules/channelStore";
import foodsReducer from "./modules/takeaway";
//创建根store 组合子模块
 const store=configureStore({
    reducer:{
        mycounter:counterStore,
        mychannel:channelStore,
        myfoods:foodsReducer
    }
})
export default store;
