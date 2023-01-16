
import './App.css';
import { NavBar } from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Project';
import { Contact } from "./components/Contact";


function App() {
  return (
    <div className="App">
  <NavBar/>
  <Banner/>
<Skills/>
<Projects/>
<Contact></Contact>
    </div>
  );
}

export default App;
