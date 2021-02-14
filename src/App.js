import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Home from "./Componants/Home";
import Exp from "./Componants/Experience/Experience";
function App() {
  return (
    <Routing>
    <div className="App">
    <Switch>
    <Route path="/experience" component={Exp}/>
           <Route path="/" component={Home}/>
          <Route path="/Home" component={Home}/>

      
    </Switch>
    </div>
    </Routing>
  );
}

export default App;