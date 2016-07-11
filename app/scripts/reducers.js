import { TOGGLE_PERSON, REQUEST_DATA, RECEIVE_DATA } from './actions'

export default (state = { peopleState: [], foodAvoid: [], drinkLike: [], ready: false }, action) => {

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
      const newPeopleState = updatePeopleState(state.peopleState, action.people);
      const newFoodAvoid = updateFoodToAvoid(state.peopleState);
      const newDrinkLike = updateDrinkPref(state.peopleState)
      return Object.assign({}, state, {
        ready: true,
        peopleState: newPeopleState,
        foodAvoid: newFoodAvoid,
        drinkLike: newDrinkLike
      })
    default:
      return state;
  }
}

const updatePeopleState = (peopleState, personToUpdate) => {
  // need to mutate to refresh the state
  // need to restructure redux state machine, since if I track only the people who are going for sake of data efficiency, I end up having to parse through double nested array which will add further complexity
  return peopleState.map(p => Person(p, personToUpdate));
  // if a person is toggled off and if I remove the food he/she won't eat, there may be another person who won't eat that food, but now that food item is removed from foodAvoid, so store the entire people data as state rather than name only
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

const updateFoodToAvoid = (peopleState) => {
  let foodAvoidList = [];
  peopleState.map((person) => {
    if (person.going){
      person.wont_eat.forEach((food) => {
        if (foodAvoidList.indexOf(food) == -1) {
          foodAvoidList.push(food)
        }
      })
    }
  })
  return foodAvoidList;
}

const updateDrinkPref = (peopleState) => {
  let drinkPrefList = [];
  peopleState.map((person) => {
    if (person.going){
      person.drinks.forEach((drink) => {
        if (drinkPrefList.indexOf(drink) == -1) {
          drinkPrefList.push(drink)
        }
      })
    }
  })
  return drinkPrefList;
}
