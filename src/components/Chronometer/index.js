import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Chronometer extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      timeInitial: new Date(),//initial game time 
    }
  }
  
    render(){
      
      if(this.props.timeFinal){
        return(
          <div className="clock">
            <h1>{Math.round(this.props.timeFinal - this.state.timeInitial)/1000} Segundos</h1>
          </div> 
        )
      }
      return (
        <>
          
        </>
      );
    }
}

export default Chronometer;