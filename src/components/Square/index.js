import React from 'react';

function Square(props){
    //This function renders square
    return(
      //props.onClick and props.value  
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default Square;