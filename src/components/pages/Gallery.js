import React from 'react';
// import '../../App.css';

// export default function gallery() {
//     return (
//         <>
//         <h1>WTF!</h1>
//         </>
//     );
// }

import '../../App.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

export default function Gallery() {
  return (
    <ImageSlider slides={SliderData} />
  );
}


