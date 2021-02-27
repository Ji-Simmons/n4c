import React from 'react';
import '../../App.css';

export default function ContactUs() {
    return (
        <div className='contact-us'>
        <h1>
             <p>If we have the AIS on, you can track us in real time <a href="http://www.marinetraffic.com">here</a>.{/* link to AIS ID to be added when Snowdrift has AIS */}</p>
                <br></br>
            <p>If you're close by, give us a holler on the VHF.  We're always monitoring channel 16.</p>
                <br></br>
            <p>You can say hi on our <a href="https://www.facebook.com/MV-Snowdrift-109692554101890">Facebook page</a>.</p>
                <br></br>
            <p>Or check out our <a href="">YouTube channel</a>. {/*(link to be added when channel is created).*/}</p>
        </h1>

       
        </div>
    );
}