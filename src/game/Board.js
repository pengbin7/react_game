import React from "react";
import Square from "./Square"

export default class Board extends React.Component {

    renderSquare(i){
        console.log(i);
        return(
            <Square
                value = {this.props.squares[i]}
                onClick={()=>this.props.onClick(i)}
                highlight={this.props.lines.includes(i)}/>
        )
    }


    render() {
        var rows  = [];
        for (var i=0;i<3;i++){
            var row = []
            for(var j = 3*i; j<3*i+3;j++){
                row.push(this.renderSquare(j));
            }
            rows.push(<div className="board=row" key={i}>{row}</div>)
        }

        return (
            <div>{rows}</div>
        );
    }
}