import React, { useState, useEffect } from 'react'
import { TextField, FormControl, Stack, Button } from '@mui/material'

const Settings = ({ onAdd }) => {
  const [currReps, setReps] = useState('')
  const [currSets, setSets] = useState('')
  const [currName, setName] = useState('')
  const [currTags, setTags] = useState('')

  const saveExercise = () => {
    onAdd({
      reps: currReps,
      sets: currSets,
      name: currName,
      tags: currTags
    })
    resetState()
  }

  const resetState = () => {
    setReps('')
    setSets('')
    setName('')
    setTags('')
  }

  useEffect(() => {
    console.log(currReps)
  })

  return (
    <>
      <FormControl>
        <Stack spacing={2}>
          <div id="settings-title">Settings</div>
          <div id="settings-subtest">Input your new exercise here!</div>
          <TextField id="outlined-basic name" label="Exercise Name" value={currName} onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-basic sets" label="Sets" value={currSets} onChange={(e) => setSets(e.target.value)} />
          <TextField id="outlined-basic reps" label="Reps" value={currReps} onChange={(e) => setReps(e.target.value)} />
          <TextField id="outlined-basic tags" label="Tags" value={currTags} onChange={(e) => setTags(e.target.value)} />
        </Stack>
        <br></br>
        <Button variant="contained" onClick={saveExercise}>Save</Button>
      </FormControl>
    </>
  )
}

export default Settings