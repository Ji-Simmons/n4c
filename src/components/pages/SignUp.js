import React, { Component } from 'react';
import '../../App.css';
import SignupPopup from './SignupPopup';

class SignUp extends React.Component {
// export default function SignUp() {

    constructor(props){  
        super(props)  
        this.state = { showPopup: false };  
        }  
        onClick() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
        }  
render() {
    return (
        <>
        <div align="center">
        

        {this.state.showPopup ? <SignupPopup text="Hey, that's cool.  We hope you stick around and enjoy the content." closePopup={this.onClick.bind(this)}/> : null}

        
        </div>
        
        <h4 className='signup'>We know, we know... everyone that makes cruising videos has their hand out.  We're no different in that regard.  But in an effort to stand out and to earn your support, we offer a few perks that most don't.  

        <ul>By becoming a Patreon supporter,</ul>
        <ul>
            <li>You will gain access to limited issue items, specials and discounts in our Ships Store.</li>

            <li>You will be notified in advance of when and where we will be making landfall along the eastern seaboard and are welcome to join us on board for a tour of Snowdrift and a dinner cruise (weather permitting).</li>
        
            <li>You will be automatically entered into a yearly drawing for a four day weekend aboard Snowdrift with us in The Bahamas!</li>
        </ul>
            <p><a href="http://www.patreon.com" target="_blank">Heck yeah, sign me up!</a></p>

            <p>
            <button onClick={this.onClick.bind(this)}>Hmmm... Maybe not right now.</button></p>

        </h4>
        </>
    );
}
};

export default SignUp;