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
      tags: currTags,
      show: true
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
          <div className="settings-title">SETTINGS</div>
          <div className="settings-subtext">Input your new exercise here!</div>
          <TextField id="outlined-basic name" label="Exercise Name" value={currName} onChange={(e) => setName(e.target.value)} />
          <div className="sets">
            <tr>
              <td><TextField id="outlined-basic sets" label="Sets" value={currSets}/></td>
              <td>
              <input type="radio" value="3" name="sets" onChange={(e) => setSets(e.target.value)} ></input>3
              <input type="radio" value="5" name="sets" onChange={(e) => setSets(e.target.value)} ></input>5
              </td>
            </tr>
          </div>
          <div>
            <tr>
              <td><TextField id="outlined-basic reps" label="Reps" value={currReps}/></td>
              <td>
                <input type="radio" value="3-5" name="reps" onChange={(e) => setReps(e.target.value)} ></input>3-5
                <input type="radio" value="6-8" name="reps" onChange={(e) => setReps(e.target.value)} ></input>6-8
                <input type="radio" value="10-12" name="reps" onChange={(e) => setReps(e.target.value)} ></input>10-12
                <input type="radio" value="AMRAP" name="reps" onChange={(e) => setReps(e.target.value)} ></input>AMRAP</td>
            </tr>
          </div>
          
          <TextField id="outlined-basic tags" label="Tags" value={currTags} onChange={(e) => setTags(e.target.value)} />
        </Stack>
        <br></br>
        <Button variant="contained" onClick={saveExercise}>Save</Button>
      </FormControl>
    </>
  )
}

export default Settings