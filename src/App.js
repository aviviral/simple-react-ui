import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar"
import Main from "./Component/Main"
import Avilability from "./Component/Avilability"
import Investor from "./Component/Investor"
import Invoice from "./Component/Invoice"
import Developer from "./Component/Developer"
import Footer from "./Component/Footer"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Avilability/>
    <Investor/>
    <Invoice/>
    <Developer/>
    <Footer/>
    </div>
  );
}

export default App;
