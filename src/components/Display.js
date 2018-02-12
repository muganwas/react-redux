import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props){
        super(props);
        this.state = {
        }

    } 
    render(){
        let daText = this.props.daText;
        return(
            <div className="big-word">
                {
                    daText
                }
            </div>
        )
    }

}