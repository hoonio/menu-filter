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
    let meetsCriteria = true;
    this.props.peopleGoing.forEach((person) => {
      if (person.going) {
        person.wont_eat.forEach((food) => {
          if (venue.food.indexOf(food) !== -1) {
            meetsCriteria = false;
          }
        })
      }
    })
    return meetsCriteria;
  }

  render() {
    let listPeople, listRestaurants, peopleGoing = null;

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
      listRestaurants = (Restaurants.map((venue, index) => {
        if (this.checkIfMeetsCriteria(venue)) {
          return (
            <tr key={index}>
              <td>{venue.name}</td>
              <td>{venue.food}</td>
              <td>{venue.drinks}</td>
            </tr>
          )
        }
      }))
    }

    return (
      <div>
        {listPeople}
        <table style={tableStyle}><tbody>
          <tr>
            <td>Restaurant</td>
            <td>Food</td>
            <td>Drinks</td>
          </tr>
          {listRestaurants}
        </tbody></table>
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
