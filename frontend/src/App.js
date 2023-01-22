import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Settings from './Settings'
import Roulette from './Roulette'
import { useState } from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import WorkoutData from './WorkoutData.js'

function App() {

  const [showSettings, setShowSettings] = useState(false)
  const [showHome, setShowHome] = useState(true)
  const [showRoulette, setShowRoulette] = useState(false)

  const [allWorkouts, setWorkouts] = useState([{
    name: "barbell bench",
    sets: "5",
    reps: "3-5",
    tags: ["chest", "triceps", "push"],
    show: true,
},
{
    name: "dumbell chest press",
    sets: "3",
    reps: "10-12",
    tags: ["chest", "triceps", "push"],
    show: true,
},
{
    name: "incline barbell bench",
    sets: "3",
    reps: "8-10",
    tags: ["chest", "triceps", "push"],
    show: true,
},
{
    name: "incline dumbbell chest press",
    sets: "3",
    reps: "10-12",
    tags: ["chest", "triceps", "push"],
    show: true,
},
{
    name: "pec fly",
    sets: "3",
    reps: "10-12",
    tags: ["chest", "triceps", "push"],
    show: true,
},
{
    name: "push ups",
    sets: "3",
    reps: "AMRAP",
    tags: ["chest", "triceps", "push"],
    show: true,
},
{
    name: "barbell military press",
    sets: "5",
    reps: "3-5",
    tags: ["shoulders", "push"],
    show: true,
},
{
    name: "dumbbell shoulder press",
    sets: "3",
    reps: "6-8",
    tags: ["shoulders", "push"],
    show: true,
},
{
    name: "arnold press",
    sets: "3",
    reps: "6-8",
    tags: ["shoulders", "push"],
    show: true,
},
{
    name: "lateral raise",
    sets: "3",
    reps: "10-12",
    tags: ["shoulders", "push"],
    show: true,
},
{
    name: "front raise",
    sets: "3",
    reps: "10-12",
    tags: ["shoulders", "push"],
    show: true,
}])

  const addWorkout = (workout) => {
  
    setWorkouts([...allWorkouts, workout])

  }

  const setFlag = (tag) => {
    let filteredWorkouts = allWorkouts.map((workout) => {
      if (workout.tags.includes(tag)) {
        workout.show = true
      } else {
        workout.show = false
      }
    })
    setWorkouts(filteredWorkouts)
  }

  const showHideSettings = () => {
  
    setShowSettings(true)
    setShowHome(false)
    setShowRoulette(false)

  }

  const showHideHome = () => {
  
    setShowSettings(false)
    setShowHome(true)
    setShowRoulette(false)

  }

  const showHideRoulette = () => {
  
    setShowSettings(false)
    setShowHome(false)
    setShowRoulette(true)

  }

  return (
    <div className="App">
      <div>
        <ResponsiveAppBar showSettings={showHideSettings}
                          showHome={showHideHome}
                          showRoulette={showHideRoulette}
                          ></ResponsiveAppBar>
        {showHome && <Home setFlag={setFlag}></Home>}
        {showSettings && <Settings onAdd={addWorkout}/>}
        {showRoulette && <Roulette className="roulette" allWorkouts={allWorkouts}></Roulette>}
      </div>
    </div>
  );
}

export default App;
