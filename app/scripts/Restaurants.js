import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personSelected: ['John Davis']
    }
  }

  componentDidMount() {
    // this.props.getStockList()
    console.log('Rest mount')
  }

  checkboxTicked(personTicked) {
    // query if the name is already in a
    // update state by adding person's name,
    console.log(personTicked)
    console.log(this.state.personSelected)
  }

  onchangetest() {
    // query if the name is already in a
    // update state by adding person's name,
    console.log('onchange triggered')
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
          <input type="checkbox" id="cbox1" value="first_checkbox" onClick={this.checkboxTicked} />{person.name}
        </div>
      }))
    }

    return <div>
      {listPeople}
      <input type="text" id="cbox1" onChange={this.onchangetest} />
    </div>;
  }
}
