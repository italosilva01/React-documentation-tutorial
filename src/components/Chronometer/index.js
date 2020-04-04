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
      console.log(this.props.timeFinal);
      console.log(this.state.timeInitial);
      console.log(Math.round(this.props.timeFinal - this.state.timeInitial));
      if(this.props.timeFinal){
        return(
          <div className="clock">
                <h1>{Math.round(this.props.timeFinal - this.state.timeInitial)}</h1>
            </div> 
        )
      }
     return(
            <div className="clock">
                <h1></h1>
                <p></p>
            </div>  
        )
    }
}

export default Chronometer;