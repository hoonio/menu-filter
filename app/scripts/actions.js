export const TOGGLE_PERSON = 'TOGGLE_PERSON'

export const togglePerson = (personData) => {
  console.log('toggle list item')
  return {
    type: TOGGLE_PERSON,
    person: personData
  }
}
