import './App.scss'
import avatar from './images/bozai.png'
import  {useRef,useState,useEffect} from "react";
import _ from "lodash"
import  classnames from 'classnames'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import axios from "axios";
/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 87,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]
//自定义hook
const useGetList = () => {
  const [list,setList]=useState([])
  useEffect(() => {
    async function fngetList() {
      const res = await axios.get("http://localhost:3004/list")
      console.log(res)
      setList(res.data)
    }
    fngetList();
  }, []);
  return {list,setList}
}
//封装item 组件，UI组件独立
function Item({item,onDel}) {
  return <div  className="reply-item">
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
            className="bili-avatar-img"
            alt=""
            src={item.user.avatar}
        />
      </div>
    </div>

    <div className="content-wrap">
      {/* 用户名 */}
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>
          {item.user.uid === user.uid &&
              <span className="delete-btn" onClick={() => onDel(item.rpid)}> {/*传参数用箭头函数*/}
                删除
                  </span>
          }

        </div>
      </div>
    </div>
  </div>
}

const CommentList = () => {
  // const [list,setList]=useState(_.orderBy(defaultList,'like','desc'));

  const {list, setList} = useGetList()
  //删除功能
  const handleDel = (id) => {
    console.log(id);
    //过滤删除记录,重新更新状态值，使得能重新渲染dom
    setList(list.filter(item => (item.rpid !== id)))
  }
  const [tabType, setTabType] = useState('hot')
  const handleTab = (type) => {
    console.log(type);
    setTabType(type);
    //排序
    if (type === 'hot') {
      setList(_.orderBy(list, 'like', 'desc'))
    } else {
      setList(_.orderBy(list, 'ctime', 'desc'))
    }
  }
  //发布功能
  const refObject = useRef(null);
  const [content, setContent] = useState('');
//
  const handlePublish = () => {
    console.log(dayjs().format("YYY-mm"));
    let newContent = {
      rpid: uuidv4(),
      user: {
        uid: '30009257',
        avatar,
        uname: '黑马前端',
      },
      content: content,
      ctime: dayjs(new Date()).format('MM-DD hh:mm'),
      like: 66,
    };
    //新内容追加到列表
    setList([newContent, ...list]);
    //发布评论后，清除原来内容
    setContent('');
    //发布后，获取评论框聚焦
    refObject.current.focus();

  }
  return (
      <div className="app">
        {/* 导航 Tab */}
        <div className="reply-navigation">
          <ul className="nav-bar">
            <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{list.length}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item=> (
                <span
                    // className={`nav-item ${tabType == item.type && "active"}`}
                    className={classnames('nav-item',{active:tabType === item.type})}
                    key={item.type}
                    onClick={()=>handleTab(item.type)}>{item.text}
                </span>

              ))}

          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              ref={refObject}
              value={content}
              onChange={(event)=>setContent(event.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={()=>handlePublish()}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {list.map(item=> (<Item item={item} key={item.rpid} onDel={handleDel}></Item>))}

        </div>
      </div>
    </div>
  )
}


export default CommentList