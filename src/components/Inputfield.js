import React, { Component } from 'react';

export default class Inputfield extends Component {
    constructor(props){
        super(props);
        this.state = {
        }

    }
    sendText=(e)=>{
        let wad = e.target.value;
        this.setState({
            wad: wad
        });
        (this.props.showText)(this.state.wad);

    }
    render(){
        return(
            <div className="input-wrapper">
                <input type="text" placeholder="Type something..." onChange={ this.sendText } />
            </div>
        )
    }

}