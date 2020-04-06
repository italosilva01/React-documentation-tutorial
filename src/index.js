import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './components/Clock/index'
import Chronometer from './components/Chronometer/index'


function Square(props){
  //This function renders square
  return(
    //props.onClick and props.value  
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

  
  class Board extends React.Component {
 
    renderSquare(i) {
      return (<Square 
      value={this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
       />);
    }
  
    render() {
      return (

        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>

          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>

          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      
        history:[{
          squares:Array(9).fill(null),
          
        }],
        position:[
          ''
        ],
        xIsNext:true,
        stepNumber:0
      };
    }

    
    
    colRow(i){
      let location;
      //defining the row
      if(i<3)
        location = 'Row: 1, ';
      else if(i<6)
        location = 'Row: 2, ';
      else if(i<9)
        location = 'Row: 3, ';

      //defining the column
      if(i === 0||i === 3||i === 6)
        location += 'Col: 1';
      if(i === 1||i === 4||i === 7)
        location += 'Col: 2';
      if(i === 2||i === 5||i === 8)
        location += 'Col: 3';

      return location;

    }

    handleClick(i){
      const history = this.state.history.slice(0,this.state.stepNumber +1);
      const current = history[history.length - 1];
      const squares =  current.squares.slice();
      const position = this.state.position;
      let pos= this.colRow(i);

      //console.log(i); 

      if(calculateWinner(squares)||squares[i]){
        return;
      }

      squares[i]= this.state.xIsNext?'X':'O';
      this.setState({
        history: history.concat([{
          squares:squares,
         
        }]),
        
        position:position.concat(pos),
        xIsNext: !this.state.xIsNext,
        stepNumber:history.length
      });

      console.log(this.state.position);
    }

    //console.log(this.state.pos);

    jumpTo(step){
      this.setState({
        stepNumber:step,
        xIsNext:(step%2) ===0,
      })
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const play = this.state.position;
      let timeFinal ;

      //HISTORY
      const moves = history.map((step,move)=>{
        const desc = move?
        'Go to move #'+move+' ':
        'Go to game start';

        return(
          <li key={move}>
            <button onClick={()=>this.jumpTo(move)}>{desc} {play[move]} </button>
          </li>
        );
      });

      let status;
      if(winner){
        status = 'Wlet position;inner: '+winner;
        timeFinal = new Date();//time at the end of the game
      }else{
        status = 'Next player: '+(this.state.xIsNext?'X':'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares = {current.squares}
              onClick={(i)=>this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            <Clock/>
            <Chronometer timeFinal={timeFinal}/>
          </div>
        </div>
      );
    }
  }

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

        return squares[a];
      }
    }
    return null;
  }