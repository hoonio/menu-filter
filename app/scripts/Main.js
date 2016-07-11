import React from 'react'
import { People, Restaurants } from '../data'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personSelected: []
    }
  }

  componentDidMount() {
    // this.props.getStockList()
  }

  computePreferences() {
    
  }

  checkboxTicked(personTicked) {
    let filterState = this.state.personSelected;
    const personInArray = filterState.indexOf(personTicked);
    if (personInArray == -1) { // person not previously selected
      filterState.push(personTicked);
    }
    else {
      filterState.splice(personInArray,1) // remove the person from the array
    }
    this.setState({personSelected: filterState})
  }

  render() {
    let listPeople, listRestaurants = null;

    if (People) {
      listPeople = (People.map((person, index) => {
        return (
          <div key={index}>
            <input type="checkbox" id={index} value="first_checkbox" onClick={this.checkboxTicked.bind(this, person.name)} />{person.name}
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

    return (
      <div>
        {listPeople}
        <div>{this.state.personSelected}</div>
        <table style={tableStyle}>
          <tr>
            <td>Restaurant</td>
            <td>Food</td>
            <td>Drinks</td>
          </tr>
          {listRestaurants}
        </table>
      </div>
    );
  }
}

const tableStyle = {
  marginTop: '100px'
}
