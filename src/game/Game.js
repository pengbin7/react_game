import React from "react";
import Board from "./Board"

function  calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    /*
    * const定义的变量不可以修改，而且必须初始化
    * var定义的变量可以修改，如果不初始化会输出undefined，不会报错
    * let是块级作用域，函数内部使用let定义后，对函数外部无影响
    * */
    for (let i = 0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
            return {winner:squares[a],lines:[a,b,c]};
        }
    }
    return null;

}
 export default class Game extends React.Component {

    constructor(){
        super();
        this.state = {
            history:[{
                squares:Array(9).fill(null),
                location:"Game Start",
            }],
            xIsNext:true,
            stepNumber:0,
            sort:false,
        };
    }

    handleClick(i){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squaresCopy = current.squares.slice();
        if(calculateWinner(squaresCopy) || squaresCopy[i]){
            return;
        }
        squaresCopy[i] = this.state.xIsNext?"X":"O";
        const location = "Move #("+(Math.floor(i/3)+1)+","+(i%3+1)+")";
        this.setState({
            history:history.concat([{
                squares:squaresCopy,
                location:location
            }]),
            xIsNext:!this.state.xIsNext,
            stepNumber:history.length,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)?false:true,
        })
    }

    sort(){
        let sort = this.state.sort;
        this.setState({
            sort:!sort,
        })
    }
    render() {

        let history = this.state.history;
        let sort = this.state.sort;
        let stepNumber = this.state.stepNumber;
        if (sort){
            history = this.state.history.slice();
            history.reverse();
        }
        let current = history[stepNumber];
        let result = calculateWinner(current.squares);
        const moves = history.map((step,move)=>{
            if (move === this.state.stepNumber) {
                return (
                    <li key={move}>
                        <a href="#" onClick={() => this.jumpTo(move)}><strong>{step.location}</strong></a>
                    </li>
                );
            }
            return (
                <li>
                    <a href={'#'} onClick={()=>this.jumpTo(move)}>{step.location}</a>
                </li>)
        });
        let status;
        if(result){
            status = 'Winner:'+result.winner;
        }else{
            status = 'Next player: '+(this.state.xIsNext?'X':'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i)=>this.handleClick(i)}
                        lines={result?result.lines:[]}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={this.sort.bind(this)}>排序</button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

