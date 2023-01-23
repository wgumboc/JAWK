import React from 'react'
import { FormControl, Stack, Button } from '@mui/material'
import {useState, useEffect} from 'react'

const Home = ({setFlag}) => {

  const [bodyPart, setBodyPart] = useState("push")

  const flagger = (e) => {
    setFlag(e.target.value)
    setBodyPart(e.target.value)
  }


  return (
      <>
        <FormControl>
          <Stack spacing={2}>
            <div className="home-subtext">Welcome to Workout Wroulette</div>
            <div className="home-subtext">Select your area of focus!</div>
            <Button variant="contained" value="shoulders" onClick={flagger}>Shoulders</Button>
            <Button variant="contained" value="triceps" onClick={flagger}>Triceps</Button>
            <Button variant="contained" value="biceps" onClick={flagger}>Biceps</Button>
            <Button variant="contained" value="push" onClick={flagger}>Push</Button>
            <Button variant="contained" value="pull" onClick={flagger}>Pull</Button>
            <Button variant="contained" value="chest" onClick={flagger}>Chest</Button>
            <Button variant="contained" value="hamstrings" onClick={flagger}>Hamstrings</Button>
            <Button variant="contained" value="legs" onClick={flagger}>Legs</Button>
          </Stack>
        </FormControl>
        <div class="body-part-selection">Youve selected {bodyPart}! Go to Wroulette to start!</div>
      </>
  )
}

export default Home