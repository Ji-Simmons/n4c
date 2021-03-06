import React, { Component } from 'react';
import '../../App.css';
import Popup from './Popup';

class Home extends React.Component {

    constructor(props){  
        super(props)  
        this.state = { showPopup: true };  
        }  
        togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
        }  
render() {
    return (
        <div align="center">
        

        {this.state.showPopup ? <Popup text='This site is for demonstration purposes only.  All information, claims and pictures contained herein are fictional and do not represent any advice, experience or ownership by the creators of this site. :)' closePopup={this.togglePopup.bind(this)}/> : null}

        <h1 className='home'>
        <img className='himage' src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3904&q=80"></img></h1>
        </div>
    );
}
}

export default Home;