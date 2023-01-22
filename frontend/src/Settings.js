import React, { useState } from 'react'
import { TextField, FormControl, Stack, Button, FormHelperText, FormGroup, FormControlLabel, Checkbox  } from '@mui/material'
import { Box } from '@mui/system'

const Settings = ({ onAdd }) => {
  const [currReps, setReps] = useState('')
  const [currSets, setSets] = useState('')
  const [currName, setName] = useState('')
  const [currTags, setTags] = useState([])

  const [checkBoxes, setCheckBoxes] = useState([
    false, false, false, false, false,
    false, false, false, false, false
  ])

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

  const handleCheckBoxChange = (e, tagName, index) => {
    const currTagsAsArray = Array.from(currTags)
    if (e.target.checked) {
      currTagsAsArray.push(tagName)
      setTags(currTagsAsArray)

      const currCheckboxes = checkBoxes
      currCheckboxes[index] = true
      setCheckBoxes(currCheckboxes)
    } else {
      const tagsIndex = currTagsAsArray.indexOf(tagName)
      currTagsAsArray.splice(tagsIndex, 1)
      setTags(currTagsAsArray)

      const currCheckboxes = checkBoxes
      currCheckboxes[index] = false
      setCheckBoxes(currCheckboxes)
    }

    updateSaveButton()
  }

  const updateSaveButton = () => {
    if (currReps !== '' && currSets !== '' && currName !=='' && currTags !== [] && checkBoxes.includes(true)) {
      setSaveButtonDisabled(false)
    }
  }

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
    setTags([])
    setCheckBoxes([
      false, false, false, false, false,
      false, false, false, false, false
    ]);
    setSaveButtonDisabled(true);
    document.querySelectorAll('input[type=radio]').forEach(el => el.checked = false)
  }

  return (
    <>
      <FormControl>
        <Stack spacing={2}>
          <div className="settings-title">CREATE</div>
          <div className="settings-subtext">Input your new exercise here!</div>
          <TextField id="outlined-basic name" label="Exercise Name" value={currName} onChange={(e) => setName(e.target.value)} />
          <div className="sets">
            <tr>
              <td><TextField id="outlined-basic sets" label="Sets" value={currSets} /></td>
              <td>
                <input type="radio" value="3" name="sets" onChange={(e) => setSets(e.target.value)} ></input>3
                <input type="radio" value="5" name="sets" onChange={(e) => setSets(e.target.value)} ></input>5
              </td>
            </tr>
          </div>
          <div>
            <tr>
              <td><TextField id="outlined-basic reps" label="Reps" value={currReps} /></td>
              <td>
                <input type="radio" value="3-5" name="reps" onChange={(e) => setReps(e.target.value)} ></input>3-5
                <input type="radio" value="6-8" name="reps" onChange={(e) => setReps(e.target.value)} ></input>6-8
                <input type="radio" value="10-12" name="reps" onChange={(e) => setReps(e.target.value)} ></input>10-12
                <input type="radio" value="AMRAP" name="reps" onChange={(e) => setReps(e.target.value)} ></input>AMRAP
              </td>
            </tr>
          </div>

          <FormGroup className="tag-checkboxes">
            <Box>
              <FormControlLabel control={<Checkbox id='shouldersBox' checked={checkBoxes[0]} />} label="Shoulders" onChange={(e) => handleCheckBoxChange(e, "shoulders", 0)} />
              <FormControlLabel control={<Checkbox id='tricepsBox' checked={checkBoxes[1]} />} label="Triceps" onChange={(e) => handleCheckBoxChange(e, "triceps", 1)} />
              <FormControlLabel control={<Checkbox id='bicepsBox' checked={checkBoxes[2]} />} label="Biceps" onChange={(e) => handleCheckBoxChange(e, "biceps", 2)} />
              <FormControlLabel control={<Checkbox id='pushBox' checked={checkBoxes[3]} />} label="Push" onChange={(e) => handleCheckBoxChange(e, "push", 3)} />
              <FormControlLabel control={<Checkbox id='pullBox' checked={checkBoxes[4]} />} label="Pull" onChange={(e) => handleCheckBoxChange(e, "pull", 4)} />
            </Box>
            <Box>
              <FormControlLabel control={<Checkbox id='chestBox' checked={checkBoxes[5]} />} label="Chest" onChange={(e) => handleCheckBoxChange(e, "chest", 5)} />
              <FormControlLabel control={<Checkbox id='glutesBox' checked={checkBoxes[6]} />} label="Glutes" onChange={(e) => handleCheckBoxChange(e, "glutes", 6)} />
              <FormControlLabel control={<Checkbox id='quadsBox' checked={checkBoxes[7]} />} label="Quads" onChange={(e) => handleCheckBoxChange(e, "quads", 7)} />
              <FormControlLabel control={<Checkbox id='hamstringsBox' checked={checkBoxes[8]} />}  label="Hamstrings" onChange={(e) => handleCheckBoxChange(e, "hamstrings", 8)} />
              <FormControlLabel control={<Checkbox id='legsBox' checked={checkBoxes[9]} />}  label="Legs" onChange={(e) => handleCheckBoxChange(e, "legs", 9)} />
            </Box>
          </FormGroup>
        </Stack>
        <br></br>
        <Button variant="contained" onClick={saveExercise} disabled={saveButtonDisabled}>Save</Button>
      </FormControl>
    </>
  )
}

export default Settings