import React from 'react'
import { connect } from 'react-redux'

import { People, Restaurants } from '../data'
import { getData, togglePerson } from './actions'

class Main extends React.Component {
  checkboxTicked(personTicked) {
    this.props.togglePerson(personTicked)
    // console.log(this.props.peopleGoing)
    this.render()
  }

  componentDidMount() {
    this.props.getData()
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
        return (
          <tr key={index}>
            <td>{venue.name}</td>
            <td>{venue.food}</td>
            <td>{venue.drinks}</td>
          </tr>
        )
      }))
    }

    if (this.props.peopleGoing) {
      peopleGoing = '';
      (this.props.peopleGoing.map((name, index) => {
        peopleGoing =+ name+', ';
      }));
      // console.log(peopleGoing)
    }

    return (
      <div>
        {listPeople}
        <div>{peopleGoing}</div>
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
  console.log(state)
  return { peopleGoing: state.peopleState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    togglePerson: (personTicked) => { dispatch(togglePerson(personTicked)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
