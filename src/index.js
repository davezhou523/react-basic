import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
// {/*为react注入store:使用react-redux的Provider组件通过
//       store 参数把创建好的store实例注入到应用中*/}
root.render(
    <React.StrictMode>

      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
