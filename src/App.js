import logo from './logo.svg';
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Logobar from './components/companyslogos/logobar';
import Products from './components/shopproducts/products';
import HomeDesign from './components/design/homedesign';
import CodeCanvas from './components/canvas/3dcode';
import ScrollDivbar from './components/scrollpage/scrolldiv';
import Automatic from './components/Automationpage/automat';
import ContactBar from './components/Contactpage/contactbar';

// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
             <Navbar/>
             <Home/>
            <Logobar/>
            <Products/>
            <HomeDesign/>
            <CodeCanvas/>
            <ScrollDivbar/>
            <Automatic/>
            <ContactBar/>

    </div>
  );
}

export default App;
