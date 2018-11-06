import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, HashRouter, Switch, Route, Redirect  } from 'react-router-dom'



/**************************************************/
import Game from '../game/Game'
import Slider from './Slider'
/**************************************************/



//添加路由
const RouterConfig = (
    <div>
        <Switch>
            <Route exact path='/'       component={Slider}  />
            <Route path='/game'   component={Game}/>
        </Switch>
        {/*<Redirect from='' to="/"/>*/}
    </div>
);

export default RouterConfig;


// <Router>
//     <div>
//         <ul>
//             <li><Link to="/">首页</Link></li>
//             <li><Link to="/about">关于</Link></li>
//             <li><Link to="/topics">主题列表</Link></li>
//         </ul>
//
//         <hr/>
//
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//         <Route path="/topics" component={Topics}/>
//     </div>
// </Router>