import { TOGGLE_PERSON } from './actions'

export default (state = { peopleGoing: [], foodAvoid: [], DrinkLike: [], ready: false }, personTicked) => {
  // only one case here, toggle on/off personSelecte
  let peopleState = state.peopleGoing;
  const personInArray = peopleState.indexOf(personTicked.name);
  if (personInArray == -1) { // person not previously selected
    peopleState.push(personTicked.name);
  }
  else {
    peopleState.splice(personInArray,1) // remove the person from the array
  }

  return Object.assign({}, state, {
    peopleGoing: peopleState
  })
}
