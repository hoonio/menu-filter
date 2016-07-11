import { TOGGLE_PERSON, REQUEST_DATA, RECEIVE_DATA } from './actions'

export default (state = { peopleState: [], foodAvoid: [], DrinkLike: [], ready: false }, action) => {

  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        ready: false
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        ready: true,
        peopleState: action.people
      })
    case TOGGLE_PERSON:
      const newState = updatePeopleState(state.peopleState, action.people)
      return Object.assign({}, state, {
        ready: true,
        peopleState: newState
      })
    default:
      return state;
  }
}

const updatePeopleState = (peopleState, personToUpdate) => {
  // need to mutate to refresh the state
  // let peopleState = state.peopleGoing;
  // need to restructure redux state machine, since if I track only the people who are going for sake of data efficiency, I end up having to parse through double nested array which will add further complexity
  console.log(peopleState);
  console.log(personToUpdate)
  return peopleState.map(p => Person(p, personToUpdate));
  // if a person is toggled off and if I remove the food he/she won't eat, there may be another person who won't eat that food, but now that food item is removed from foodAvoid, so store the entire people data as state rather than name only


  // if (action.person) {
    // keep track of who is going to lunch
    // const personInArray = peopleState.indexOf(action.person.name);
    // if (personInArray == -1) { // person not previously selected
    //   peopleState.push(action.person.name);
    // }
    // else {
    //   peopleState.splice(personInArray,1) // remove the person from the array
    // }
    //
    // create an array of food to avoid
  //   let foodState = peopleState.map((person) => {
  //   })
  // }
  // return

}

const Person = (state, action) => {
  if (state.name !== action.name) {
    return state;
  }
  console.log('found match');
  return {
    name: state.name,
    wont_eat: state.wont_eat,
    drinks: state.drinks,
    going: !state.going
  };
}
