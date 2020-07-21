import React, { Component } from 'react';

export class Colors extends Component{
    render(){
        // console.log(this.props)
        return(
            <div className="row">
                 {this.props.colorNames.map(color => (
                     <div className="col" key={color} style={{backgroundColor: color }}>
                         {color}
                     </div>
                 ))}
            </div>
        )
    }
}