import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Slider from "./menu/Slider";
import Game from "./game/Game";
import { BrowserRouter } from 'react-router-dom'

class Box extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
<div>
<div>
<span>{'菜单'}</span>
<Slider/>
</div>,
<div>
<span>{'游戏'}</span>
<Game/>
</div>
</div>
        )
}
}



ReactDOM.render(
    <BrowserRouter>
        <Box/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
