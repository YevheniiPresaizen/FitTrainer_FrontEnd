import * as actionTypes from './actionsTypes'

const typesExercise = [{
  value: 'kilograms',
  label: 'kilograms'
},
  {
    value: 'kilometers',
    label: 'kilometers'
  },
  {
    value: 'time',
    label: 'time'
  }]

export const newExerciseStart = (name, type) => {
  const newExercisesData = {
    exerciseName: name,
    exerciseType: type
  }
  console.log(newExercisesData,'NEW EXERCISE DATA')
  return {
    type: actionTypes.NEW_EXERCISES_START
  }
}

export const handleChangeExercise = (name, e) => {
  const updateObject = e.target.value
  return {
    type: actionTypes.NEW_EXERCISES_UPDATE,
    [name]: updateObject
  }
}

export const setTypes = (data) => ({
  type: actionTypes.NEW_EXERCISES_INIT,
  types: data
})

export const initTypes = () => {
  return dispatch => {
    dispatch(setTypes(typesExercise))
  }
}
