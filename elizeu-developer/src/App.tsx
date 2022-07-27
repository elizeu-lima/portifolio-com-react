import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/navbar";
import { Banner } from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';


function App() {
  

  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App
