import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Snowdrift from './components/pages/Snowdrift';
import gear from './components/pages/Gear';
import tenderto from './components/pages/Tenderto';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import Pics from './components/pages/Pics';
// import Specs from './components/pages/Specs';
import AboutUs from './components/pages/AboutUs';
import ImageSlider from './components/pages/ImageSlider';
import TtImageSlider from './components/pages/TtImageSlider';
import { SliderData } from './components/pages/SliderData';
import { TtSliderData } from './components/pages/TtSliderData';
import TtGallery from './components/pages/TtGallery';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/snowdrift' exact component={Snowdrift} /> */}
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/gear' exact component={gear} />
        <Route path='/Gallery' exact component={Gallery} />
        <Route path='/ImageSlider' exact component={ImageSlider} />
        <Route path='/TtImageSlider' exact component={TtImageSlider} />
        <Route path='/SliderData' exact component={SliderData} />
        <Route path='/TtSliderData' exact component={TtSliderData} />
        <Route path='/tenderto' exact component={tenderto} />
        <Route path='/TtGallery' exact component={TtGallery} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/pics' exact component={Pics} />
        {/* <Route path='/specs' exact component={Specs} /> */}
      </Switch>
    </Router>
  );
}

export default App;
