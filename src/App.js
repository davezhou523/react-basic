// import './App.css';
// import Mymount from "./study/mount1";
// import {MymountC} from "./study/mount1";
// import ExpressJs from "./study/express";
// import MyRef from "./study/MyRef";
// import CommentList from "./comment/CommentList";
// import ParentCompoment from './study/MyParentChildren'
// import MyBrother from './study/MyBrother'
// import MyContext from './study/MyContext'
// import MyEffect from './study/MyEffect'
import MyStore from './study/MyStore'

//react 组件中使用store中数据，使用useSelector钩子函数把store中的数据映射到组件中
import {useSelector} from "react-redux";
// function MyButton() {
//     return (
//         <button>I'm a button</button>
//     );
// }
function App() {
   const {count}=useSelector(state => state.mycounter)
  return (
    <div className="App">
       {/*<ExpressJs></ExpressJs>*/}
    {/*<Mymount></Mymount>*/}
    {/*    <MyButton></MyButton>*/}
    {/*    <Mymount></Mymount>*/}
    {/*    <MymountC></MymountC>*/}
    {/*<MyRef></MyRef>*/}
    {/*    <CommentList></CommentList>*/}
    {/*    <ParentCompoment></ParentCompoment>*/}
    {/*    <MyBrother></MyBrother>*/}
    {/*    <MyContext></MyContext>*/}
    {/*    <MyEffect></MyEffect>*/}
        {<MyStore></MyStore>}
    </div>
  );
}

export default App;
