import React from 'react'
import Settings from '../src/Settings'
import { FormControl, Stack, Button } from '@mui/material'

const Home = ({setFlag}) => {

  const setFlaggy = (tag) => {
    setFlag(tag)
  }

  const setExercise = (tag) => {
    setFlaggy(tag)
    alert('You selected ' + (tag) + '! Time to play WOULETTE')
  }

  return (
      <>
        <FormControl>
          <Stack spacing={2}>
            <div className="home-subtext">Select your area of focus!</div>
            <Button variant="contained" onClick={setExercise("shoulders")}>Shoulders</Button>
            <Button variant="contained" onClick={setExercise("triceps")}>Triceps</Button>
            <Button variant="contained" onClick={setExercise("biceps")}>Biceps</Button>
            <Button variant="contained" onClick={setExercise("push")}>Push</Button>
            <Button variant="contained" onClick={setExercise("pull")}>Pull</Button>
            <Button variant="contained" onClick={setExercise("chest")}>Chest</Button>
            <Button variant="contained" onClick={setExercise("glutes")}>Glutes</Button>
            <Button variant="contained" onClick={setExercise("quads")}>Quads</Button>
            <Button variant="contained" onClick={setExercise("hamstrings")}>Hamstrings</Button>
            <Button variant="contained" onClick={setExercise("legs")}>Legs</Button>
          </Stack>
            {/* <br></br> */}
            {/* <Button variant="contained" onClick="location.href = " className="woulette-button">Time to Woulette</Button>
            <button onclick="location.href = 'www.yoursite.com';" className="woulette-button" >Home</button> */}
        </FormControl>
      </>
  )
}

export default Home