import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
function App() {
  return (
    <div className="App">
        <Route  exact path='/' component={Home}/>
        <Route  path='/AboutMe' component={AboutMe} />
    </div>
  );
}

export default App;
