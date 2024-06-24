import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const channelStore=createSlice({
    name:'channel',
    initialState:{
        channelList:[]
    },
    reducers:{
        setChannel(state,action){
            state.channelList=action.payload
        }
    }
})
//异步请求
const {setChannel}=channelStore.actions
const fetchChannelList = () => {
  return  async (dispatch)=>{
      const res=await axios.get('https://geek.itheima.net/v1_0/channels')
      dispatch(setChannel(res.data.data.channels))
  }
}
export {fetchChannelList}
const ruducer=channelStore.reducer
export default ruducer