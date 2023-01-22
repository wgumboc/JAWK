import React, { useEffect } from 'react'
import WorkoutCard from './WorkoutCard'

const Roulette = ({ allWorkouts }) => {

  useEffect(() => {
    console.log(allWorkouts)
  })

  return (
    <>
      <header className="roulette-header">WOULETTE</header>
      <div className="roulette-page">
        <div className="roulette-cards-container">
          {allWorkouts.map((workout) => <WorkoutCard workout={workout}></WorkoutCard>)}
        </div>
      </div>
    </>
  )
}

export default Roulette