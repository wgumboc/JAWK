import React from 'react'
import Settings from '../src/Settings'
import { FormControl, Stack, Button } from '@mui/material'

const Home = ({setFlag}) => {

  const setFlaggy = (tag) => {
    setFlag(tag)
  }

  return (
      <>
        <FormControl>
          <Stack spacing={2}>
              <div className="settings-subtext">Input your new exercise here!</div>
          </Stack>
            <br></br>
            <Button variant="contained" onClick={setFlaggy("shoulders")}>Shoulders</Button>
            {/* <Button variant="contained" onClick={setFlaggy("triceps")}>Triceps</Button>
            <Button variant="contained" onClick={setFlaggy("biceps")}>Biceps</Button>
            <Button variant="contained" onClick={setFlaggy("push")}>Push</Button>
            <Button variant="contained" onClick={setFlaggy("pull")}>Pull</Button>
            <Button variant="contained" onClick={setFlaggy("chest")}>Chest</Button>
            <Button variant="contained" onClick={setFlaggy("glutes")}>Glutes</Button>
            <Button variant="contained" onClick={setFlaggy("quads")}>Quads</Button>
            <Button variant="contained" onClick={setFlaggy("hamstrings")}>Hamstrings</Button>
            <Button variant="contained" onClick={setFlaggy("legs")}>Legs</Button> */}
        </FormControl>
      </>
  )
}

export default Home