import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Settings from './Settings'
import { useState } from 'react'
import ResponsiveAppBar from './ResponsiveAppBar';

function App() {

  const [showSettings, setShowSettings] = useState(false)

  const [allWorkouts, setWorkouts] = useState([
    {
      reps: 10, 
      sets: 3, 
      name: "bench", 
      tags: ["chest", "triceps", "push"]}    
  ])

  const showHideSettings = () => {
  
    setShowSettings(!showSettings)

  }

  return (
    <div className="App">
      <div>
        <ResponsiveAppBar showSettings={showHideSettings}></ResponsiveAppBar>
        {showSettings && <Settings />}
      </div>
    </div>
  );
}

export default App;
