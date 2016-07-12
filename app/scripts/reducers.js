import { TOGGLE_PERSON, REQUEST_DATA, RECEIVE_DATA } from './actions'

export default (state = { peopleState: [], ready: false }, action) => {

  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        ready: false
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        ready: false,
        peopleState: action.people
      })
    case TOGGLE_PERSON:
      const newPeopleState = updatePeopleState(state.peopleState, action.people);
      return Object.assign({}, state, {
        ready: true,
        peopleState: newPeopleState
      })
    default:
      return state;
  }
}

const updatePeopleState = (peopleState, personToUpdate) => {
  return peopleState.map(p => Person(p, personToUpdate));
}

const Person = (state, action) => {
  if (state.name !== action.name) {
    return state;
  }
  return {
    name: state.name,
    wont_eat: state.wont_eat,
    drinks: state.drinks,
    going: !state.going
  };
}
