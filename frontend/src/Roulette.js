import React, { useEffect } from 'react'
import WorkoutCard from './WorkoutCard'
import Button from '@mui/material/Button'
import {useState} from 'react'

const Roulette = ({ selectedWorkouts }) => {

  const [buttonPressed, setButtonPressed] = useState('')
  const [randomIndex, setRandomIndex] = useState(0)

  useEffect(() => {
    console.log(selectedWorkouts[randomIndex])
  })

  const randomize = () => {
    setButtonPressed(true)
    randomIndex = setRandomIndex(randomIntFromInterval)
  }

  const randomIntFromInterval = () => {
    return Math.floor(Math.random() * (selectedWorkouts.length - 1))
  }


  return (
    <>
      <header className="roulette-header">WOULETTE</header>
      <div className="randomize-button"></div>
      <Button variant="contained" onClick={randomize}>Randomize</Button>
      {!buttonPressed && <div className="roulette-page">
        <div className="roulette-cards-container">
          {selectedWorkouts.map((workout) => <WorkoutCard workout={workout}></WorkoutCard>)}
        </div>
      </div>}
      {buttonPressed && <div className="roulette-page">
        <div className="roulette-cards-container">
          <WorkoutCard workout={selectedWorkouts[randomIndex]}></WorkoutCard>
        </div>
      </div>}
    </>
  )
}

export default Roulette