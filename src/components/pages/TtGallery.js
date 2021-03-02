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
import TtImageSlider from './TtImageSlider';
import { TtSliderData } from './TtSliderData';

export default function TtGallery() {
  return (
    <TtImageSlider slides={TtSliderData} />
  );
}


