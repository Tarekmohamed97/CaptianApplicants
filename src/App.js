import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/home';
import CaptainForm from './Components/CaptainForm/captainForm';
import ExitPage from './Components/ExitPage/exitPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Home exact path="/" component={Home} />
          <CaptainForm exact path="/captain-form" component={CaptainForm} />
          <ExitPage exact path="/exit" component={ExitPage}/>
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
