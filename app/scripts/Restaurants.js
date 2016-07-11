import React from 'react'

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
    const jsonPpl = [
      {
          "name": "John Davis",
          "wont_eat": ["Fish"],
          "drinks": ["Cider", "Rum", "Soft drinks"]
      },
      {
          "name": "Gary Jones",
          "wont_eat": ["Eggs", "Pasta"],
          "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
      },
      {
          "name": "Robert Webb",
          "wont_eat": ["Bread", "Pasta"],
          "drinks": ["Vokda", "Gin", "Whisky", "Rum"]
      },
      {
          "name": "Gavin Coulson",
          "wont_eat": [],
          "drinks": ["Cider", "Beer", "Rum", "Soft drinks"]
      },
      {
          "name": "Alan Allen",
          "wont_eat": ["Meat", "Fish"],
          "drinks": ["Soft drinks", "Tea"]
      },
      {
          "name": "Bobby Robson",
          "wont_eat": ["Mexican"],
          "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
      },
      {
          "name": "David Lang",
          "wont_eat": ["Chinese"],
          "drinks": ["Beer", "cider", "Rum"]
      }
    ];

    let listPeople = null;

    if (jsonPpl) {
      listPeople = (jsonPpl.map((person, index) => {
        return <div key={index}>
          <input type="checkbox" id={index} value="first_checkbox" onClick={this.checkboxTicked.bind(this, person.name)} />{person.name}
        </div>
      }))
    }

    return <div>
      {listPeople}
      <div>{this.state.personSelected}</div>
    </div>;
  }
}
