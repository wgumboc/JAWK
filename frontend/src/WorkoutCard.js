import React from 'react'

const WorkoutCard = ({workout}) => {
  return (
    <>
    {workout.show &&
        <div className="workout-card">
            <div className="workout-text-fields">
            <div>{workout.name}</div>
            <div>Sets: {workout.sets}</div>
            <div>Reps: {workout.reps}</div>
            </div>
        </div>
    }
    </>
  )
}

export default WorkoutCard