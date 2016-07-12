import { dispatch } from 'react-redux'
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'
import jsonp from 'jsonp-es6'
import { People, Restaurants } from '../data'

export const TOGGLE_PERSON = 'TOGGLE_PERSON'

export const togglePerson = (personData) => {
  console.log(personData)
  return {
    type: TOGGLE_PERSON,
    people: personData
  }
}

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

const requestData = () => ({
  type: REQUEST_DATA
})

export const receiveData = (json) => ({
  type: RECEIVE_DATA,
  people: json
})

export const getData = () => ({
  type: RECEIVE_DATA,
  people: initializeData(People)
})

// mark all persons as not attending
export const initializeData = (data) => (
  data.map((person) => {
    person.going = false;
    return person;
  })
)


// export const getData = () => {
//   return (dispatch) => {
//     dispatch(requestData())
//     console.log('request data')
//     // need to implement authentication to retrieve this gist
//     return fetch('https://api.github.com/gists/0fd0ddf6e0b93b308e0f000b65ae3816')
//     .then(resp => {
//       console.log(resp)
//       dispatch(receiveData(resp.response.posts))
//     })
//   }
// }
