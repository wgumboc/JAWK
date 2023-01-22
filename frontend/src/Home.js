import React from 'react'
import Settings from '../src/Settings'
import { FormControl, Stack, Button } from '@mui/material'

const Home = ({setFlag}) => {

  return (
      <>
        <FormControl>
          <Stack spacing={2}>
              <div className="settings-subtext">Input your new exercise here!</div>
          </Stack>
            <br></br>
            <Button variant="contained" onClick={setFlag("shoulders")}>Shoulders</Button>
            <Button variant="contained" onClick={setFlag("triceps")}>Triceps</Button>
            <Button variant="contained" onClick={setFlag("biceps")}>Biceps</Button>
            <Button variant="contained" onClick={setFlag("push")}>Push</Button>
            <Button variant="contained" onClick={setFlag("pull")}>Pull</Button>
            <Button variant="contained" onClick={setFlag("chest")}>Chest</Button>
            <Button variant="contained" onClick={setFlag("glutes")}>Glutes</Button>
            <Button variant="contained" onClick={setFlag("quads")}>Quads</Button>
            <Button variant="contained" onClick={setFlag("hamstrings")}>Hamstrings</Button>
            <Button variant="contained" onClick={setFlag("legs")}>Legs</Button>
        </FormControl>
      </>
  )
}

export default Home