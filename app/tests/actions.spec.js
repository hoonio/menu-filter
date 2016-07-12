import expect from 'expect'
import * as actions from '../scripts/actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const toggledPerson = {
      "name": "John Davis",
      "wont_eat": ["Fish"],
      "drinks": ["Cider", "Rum", "Soft drinks"]
    }
    const expectedAction = {
      type: actions.TOGGLE_PERSON,
      people: toggledPerson
    }
    expect(actions.togglePerson(toggledPerson)).toEqual(expectedAction)
  })
})
