import React, { useEffect } from 'react'
import WorkoutCard from './WorkoutCard'
import Button from '@mui/material/Button'
import {useState} from 'react'

const Roulette = ({ allWorkouts }) => {

  const [buttonPressed, setButtonPressed] = useState('')
  const [randomIndex, setRandomIndex] = useState(0)

  useEffect(() => {
    console.log(allWorkouts)
  })

  const randomize = () => {
    setButtonPressed(true)
    randomIndex = setRandomIndex(randomIntFromInterval)
  }

  const randomIntFromInterval = () => {
    return Math.floor(Math.random() * (allWorkouts.length - 1))
  }


  return (
    <>
      <header className="roulette-header">WOULETTE</header>
      <div className="randomize-button"></div>
      <Button variant="contained" onClick={randomize}>Randomize</Button>
      {!buttonPressed && <div className="roulette-page">
        <div className="roulette-cards-container">
          {allWorkouts.map((workout) => <WorkoutCard workout={workout}></WorkoutCard>)}
        </div>
      </div>}
      {buttonPressed && <div className="roulette-page">
        <div className="roulette-cards-container">
          <WorkoutCard workout={allWorkouts[randomIndex]}></WorkoutCard>
        </div>
      </div>}
    </>
  )
}

export default Roulette