import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


export default function Pics() {
    return (
        <div id="root">
        	<div className='specs'>
        		<h1>1997 Hatteras 70CPMY</h1>
        		<h3>
					<li>LOA: 72'10"</li>
        			<li>Beam: 18'6"</li>
        			<li>Draft: 6'</li>
        			<li>Bridge clearance: 23'</li>
        			<li>Displacement: 102,000 lbs.</li>
        			<li>Fuel: 1592 gal.</li>
        			<li>Water: 345 gal.</li>
        			<li>Engines: Detroit Diesel 12V92TA-DDEC 1100 HP</li>
        			<li>Fuel burn: 10 GPH @ 10 knots and 800 RPM (90 GPH @ 24 knots and 2350 RPM)</li>
        			<li>Range: 1194 NM with 10% reserve</li>
				</h3>
            </div>

    <div className="pictures-section">
    
        <div className="pictures">
            <div className="pictures-cell">
                
                <Link to='./gallery'>
                <img src="gallery/1.jpg" alt="1" className="pictures-cell_img"/>
            </Link>

            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/2.jpg" alt="2" className="pictures-cell_img"/>
                    </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/3.jpg" alt="3" className="pictures-cell_img"/>
                    </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/4.jpg" alt="4" className="pictures-cell_img"/>
                   </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/5.jpg" alt="5" className="pictures-cell_img"/>
                    </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/6.jpg" alt="6" className="pictures-cell_img"/>
                    </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/7.jpg" alt="7" className="pictures-cell_img"/>
                   </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/8.jpg" alt="8" className="pictures-cell_img"/>
                   </Link>
            </div>
            <div className="pictures-cell">
            <Link to='./gallery'>
                <img src="gallery/9.jpg" alt="9" className="pictures-cell_img"/>
                    </Link>
            </div>
        </div>
    </div>
   
</div>
    );
}

   /* <div className='pics'>
        <img src="https://images.boats.com/resize/1/54/0/7615400_20201006163739303_1_XLARGE.jpg?t=1602016256000&w=600&h=600"></img>        
        <img src="https://images.boats.com/resize/1/54/0/7615400_20201006163741313_1_XLARGE.jpg?t=1602016256000&w=600&h=600"></img>        
        <img src="https://images.boats.com/resize/1/54/0/7615400_20201006163747323_1_XLARGE.jpg?t=1602016256000&w=600&h=600"></img>
        <img src="https://images.boats.com/resize/1/82/84/7538284_20201021064153746_1_XLARGE.jpg?t=1596048510000&w=1200&h=1200"></img>
        <img src="https://images.boats.com/resize/1/82/84/7538284_20201021064208425_1_XLARGE.jpg?t=1596048510000&w=1200&h=1200"></img>
        <img src="https://images.boats.com/resize/1/82/84/7538284_20201021064212376_1_XLARGE.jpg?t=1596048510000&w=1200&h=1200"></img>
        <img src="https://images.boats.com/resize/1/82/84/7538284_20201021064226641_1_XLARGE.jpg?t=1596048510000&w=1200&h=1200"></img>
        <img src="https://images.boats.com/resize/1/82/84/7538284_20201021064250607_1_XLARGE.jpg?t=1596048510000&w=1200&h=1200"></img>
        <img src="https://images.boats.com/resize/1/82/84/7538284_20201021064325002_1_XLARGE.jpg?t=1596048510000&w=1200&h=1200"></img>



    </div> */
   