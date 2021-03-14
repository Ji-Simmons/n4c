import React from 'react';
import '../../App.css';

class SignupPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <a href="./"><button onClick={this.props.closePopup}>Right on.</button></a>
        </div>
      </div>
    );
  }
};


export default SignupPopup;