import './App.scss';
import {Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skill from './containers/skills';
import Navbar from './components/navBar';


function App() {

  return (
    <div className="App">

      <Navbar/>

      <div className="App__main--page--content">
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skill' element={<Skill/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
