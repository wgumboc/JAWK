import logo from './logo.svg';
import './App.css';
import Home from '../src/Home'
import Settings from '../src/Settings'
import ResponsiveAppBar from './ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ResponsiveAppBar></ResponsiveAppBar>

          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/settings' element={<Settings />}/>
          </Routes>

        </div>
    </Router>
    </div>
  );
}

export default App;
