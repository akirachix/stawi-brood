import "./App.css";
import Contact from "./component/Contact/Contact";
import Header from "./component/Header/Header";
import Howitworks from "./component/Howitworks/Howitworks";
import Ourproduct from "./component/Ourproduct/Ourproduct";
import Ourteam from "./component/Ourteam/Ourteam";


function App() {
  return (
    <div className="App">
     <Header/>
     <Ourproduct/>
     <Howitworks/>
     <Ourteam/>
     <Contact/>
    </div>
  );
}

export default App;
