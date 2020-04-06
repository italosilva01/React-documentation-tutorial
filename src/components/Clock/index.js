import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
    constructor(props){
      super(props);
      
      this.state={
        date:new Date(),
      }
    }

    componentDidMount(){
        this.tim = setInterval(()=>this.tick(),1000);
    }

    tick(){
      this.setState({
          date:new Date()
      })
    }


    render(){
        return(
            
            <div className="clock">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>  
        )
    }
}

export default Clock;