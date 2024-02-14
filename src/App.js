import logo from './logo.svg';
import './App.css';
import Imges_scroll from './Components/Imges_scroll';
import Navbar from './Components/Navbar';
import GroupCard from './Components/GroupCard';
import Body from './Components/Body';
import Slider from './Components/Slider';
import Quickreview from './Components/Quickreview';
import ElectronicsController from './Components/ElectronicsController';
import Bottlecontroller from './Components/Bottlecontroller';
import Capcontroller from './Components/Capcontroller';
import Boot from './Components/Boot';
import Bootcontroller from './Components/Bootcontroller';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'; 
import Sign_in from './Components/Sign_in';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import appstore from './Utils/appstore';


function App() {
  return (
    <div>

<Provider store={appstore}>

         <Navbar/>
         <Intro/>
            <Slider/>
         <Body/>
         <ElectronicsController/>
         <Bottlecontroller/>
         <Bootcontroller/>
         <Capcontroller/>
         <Footer/>
            <Cart/>

         </Provider>

             </div>
     
  );
}

export default App;
