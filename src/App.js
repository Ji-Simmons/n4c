import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Snowdrift from './components/pages/Snowdrift';
import Placeholder1 from './components/pages/Placeholder1';
import Placeholder2 from './components/pages/Placeholder2';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Pics from './components/pages/Pics';
import Specs from './components/pages/Specs';
import AboutUs from './components/pages/AboutUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/snowdrift' exact component={Snowdrift} />
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/placeholder1' exact component={Placeholder1} />
        <Route path='/placeholder2' exact component={Placeholder2} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/pics' exact component={Pics} />
        <Route path='/specs' exact component={Specs} />
      </Switch>
    </Router>
  );
}

export default App;
