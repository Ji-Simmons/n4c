import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function tenderto() {
    return (
        <div id="root">
        	<div className='specs'>
        		<h1>2007 Avon SE 490 DL</h1>
        		<h3>
					<li>LOA: 16'1"</li>
        			<li>Beam: 7'9"</li>
        			<li>Draft: 1' (drive up), 2'6" (drive down)</li>
        			<li>Bridge clearance: Not a factor</li>
        			<li>Displacement: 950 lbs.</li>
        			<li>Fuel: 15 gal.</li>
        			<li>Engine: Volvo Penta D3-130 130 HP</li>
        			<li>Fuel burn: 2 GPH @ 22 knots and 2500 RPM (6 GPH @ 34 knots and 4050 RPM)</li>
        			<li>Range: 600 NM with 60 NM reserve</li>
				</h3>
            </div>

    <div className="pictures-section">
    
        <div className="pictures">
            <div className="pictures-cell">
            <Link to='./ttgallery'>
                <img src="gallery/t1.jpg" alt="1" className="pictures-cell_img"/>
                    </Link>
            </div>
            <div className="pictures-cell">
                <img src="gallery/t2.jpg" alt="2" className="pictures-cell_img"/>
                    
            </div>
            <div className="pictures-cell">
                <img src="gallery/t3.jpg" alt="3" className="pictures-cell_img"/>
                    
            </div>
            <div className="pictures-cell">
                <img src="gallery/t4.jpg" alt="4" className="pictures-cell_img"/>
                   
            </div>
            <div className="pictures-cell">
                <img src="gallery/t5.jpg" alt="5" className="pictures-cell_img"/>
                    
            </div>
            <div className="pictures-cell">
                <img src="gallery/t6.jpg" alt="6" className="pictures-cell_img"/>
                    
            </div>
            <div className="pictures-cell">
                <img src="gallery/t7.jpg" alt="7" className="pictures-cell_img"/>
                   
            </div>
            <div className="pictures-cell">
                <img src="gallery/t8.jpg" alt="8" className="pictures-cell_img"/>
                   
            </div>
            <div className="pictures-cell">
                <img src="gallery/t9.jpg" alt="8" className="pictures-cell_img"/>
                   
            </div>
            
        </div>
    </div>
   
</div>
    );
}