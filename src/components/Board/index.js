import React from 'react';
import Square from '../Square'

class Board extends React.Component {
 
    renderSquare(i,id ='') {
      return (<Square 
      value={this.props.squares[i]}
      onClick={()=>this.props.onClick(i)}
      id={id}
       />);
    }
  
    render() {
      return (

        <div>
          <div className="board-row">
            {this.renderSquare(0,'zero')}
            {this.renderSquare(1,'one')}
            {this.renderSquare(2,'two')}
          </div>

          <div className="board-row">
            {this.renderSquare(3,'three')}
            {this.renderSquare(4,'four')}
            {this.renderSquare(5,'five')}
          </div>

          <div className="board-row">
            {this.renderSquare(6,'six')}
            {this.renderSquare(7,'seven')}
            {this.renderSquare(8,'eight')}
          </div>
        </div>
      );
    }
  }

  export default Board;