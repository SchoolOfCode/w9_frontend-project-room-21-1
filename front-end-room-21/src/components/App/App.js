// import {react} from "rr"
import "./App.css";
import Biography from "../Biography/biography";
import Navbar from "../Navbar/navbar.js";
import Dropdown from "../Dropdown/dropdown";
import Searchbar from "../Searchbar/Searchbar.js";


function App() {
  return (
    <main className="App">
      <Navbar />
      <div> <Searchbar /> <Dropdown/></div>
     
     
      <Biography />
    </main>
  );
}

export default App;
