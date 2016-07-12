import React from 'react'
import { connect } from 'react-redux'

import { People, Restaurants } from '../data'
import { getData, togglePerson } from './actions'

class Main extends React.Component {
  checkboxTicked(personTicked) {
    this.props.togglePerson(personTicked)
    // console.log(this.props.peopleGoing)
    // this.render()
  }

  componentDidMount() {
    this.props.getData()
  }

  checkIfMeetsCriteria(venue) {
    const listReasonForNotGoing = this.checkCriteriaFood(venue)
    return ({
      meetsCriteria: (listReasonForNotGoing.length === 0) && this.checkCriteriaDrink(venue),
      reasons: listReasonForNotGoing
    });
  }

  checkCriteriaFood(venue) {
    let listReasonForNotGoing = [];
    this.props.peopleGoing.forEach((person) => {
      if (person.going) {
        person.wont_eat.forEach((food) => {
          if (venue.food.indexOf(food) !== -1) {
            listReasonForNotGoing.push(person.name.split(' ')[0] + " doesn't eat "+food)
          }
        })
      }
    })
    console.log(listReasonForNotGoing)
    return listReasonForNotGoing;
  }

  checkCriteriaDrink(venue) {
    let meetsCriteria = false;
    this.props.peopleGoing.forEach((person) => {
      if (person.going) {
        person.drinks.forEach((drink) => {
          if (venue.drinks.indexOf(drink) !== -1) {
            meetsCriteria = true;
          }
        })
      }
    })
    return meetsCriteria;
  }

  render() {
    let listPeople, listRestaurants, listPlacesAvoid = null;

    if (People) {
      listPeople = (People.map((person, index) => {
        return (
          <div key={index}>
            <input type="checkbox" id={index} value="first_checkbox" onClick={this.checkboxTicked.bind(this, person)} />{person.name}
          </div>
        )
      }))
    }

    if (Restaurants) {
      let criteria = [];
      listRestaurants = (Restaurants.map((venue, index) => {
        criteria = this.checkIfMeetsCriteria(venue);
        if (criteria.meetsCriteria) {
          return (
            <li key={index}>{venue.name}</li>
          )
        }
      }))
      listPlacesAvoid = (Restaurants.map((venue, index) => {
        criteria = this.checkIfMeetsCriteria(venue);
        if (!criteria.meetsCriteria) {
          const placeToAvoid = <li key={index}>{venue.name}</li>;
          const listReasons = criteria.reasons.map((reason, index) => {
            return (
              <li key={index}>{reason}</li>
            )
          });
          console.log(venue)
          return (
            <ul>
              {placeToAvoid}
              <ul>
                {listReasons}
              </ul>
            </ul>
          )
        }
      }))
    }

    return (
      <div>
        <div>
          <p>Select team members attending</p>
          {listPeople}
        </div>
        <div>
          <p>Places to go:</p>
          <ul>{listRestaurants}</ul>
          <p>Places to avoid:</p>
          <div>{listPlacesAvoid}</div>
        </div>
      </div>
    );
  }
}

const tableStyle = {
  marginTop: '100px'
}

Main.propTypes = {
  // restaurants: React.PropTypes.array.isRequired,
  peopleGoing: React.PropTypes.array,
  togglePerson: React.PropTypes.func.isRequired,
  getData: React.PropTypes.func
}

const mapStateToProps = (state) => {
  console.log('state change')
  return { peopleGoing: state.peopleState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    togglePerson: (personTicked) => { dispatch(togglePerson(personTicked)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
