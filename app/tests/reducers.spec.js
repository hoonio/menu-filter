import expect from 'expect'
import reducer from '../scripts/reducers'
import * as actions from '../scripts/actions'
import { People } from '../data'

describe('lunch filter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        peopleState: [],
        ready: false
      }
    )
  })

  let reducerState = reducer([], {
    type: actions.RECEIVE_DATA,
    people: actions.initializeData(People)
  });

  it('should load data and mark everyone as not going', () => {
    expect(
      reducerState
    ).toEqual(
      {
        peopleState: expectedInitData,
        ready: true
      }
    )

  })

  it('should return default state', () => {
    expect(
      reducer(reducerState, {
        type: 'UNSPECIFIED_ACTION'
      })
    ).toEqual(
      {
        peopleState: expectedInitData,
        ready: true
      }
    )

  })

  it('should toggle to correct state', () => {
    expect(
      reducer(reducerState, {
        type: actions.TOGGLE_PERSON,
        people: toggleJohnDavis
      })
    ).toEqual(
      {
        peopleState: dataAfterJohnDavisToggle,
        ready: true
      }
    )
  })
})

const toggleJohnDavis =     {
        "name": "John Davis",
        "wont_eat": ["Fish"],
        "going":false,
        "drinks": ["Cider", "Rum", "Soft drinks"]
    };

const expectedInitData = [
    {
        "name": "John Davis",
        "wont_eat": ["Fish"],
        "going":false,
        "drinks": ["Cider", "Rum", "Soft drinks"]
    },
    {
        "name": "Gary Jones",
        "wont_eat": ["Eggs", "Pasta"],
        "going":false,
        "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
    },
    {
        "name": "Robert Webb",
        "wont_eat": ["Bread", "Pasta"],
        "going":false,
        "drinks": ["Vokda", "Gin", "Whisky", "Rum"]
    },
    {
        "name": "Gavin Coulson",
        "wont_eat": [],
        "going":false,
        "drinks": ["Cider", "Beer", "Rum", "Soft drinks"]
    },
    {
        "name": "Alan Allen",
        "wont_eat": ["Meat", "Fish"],
        "going":false,
        "drinks": ["Soft drinks", "Tea"]
    },
    {
        "name": "Bobby Robson",
        "wont_eat": ["Mexican"],
        "going":false,
        "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
    },
    {
        "name": "David Lang",
        "wont_eat": ["Chinese"],
        "going":false,
        "drinks": ["Beer", "cider", "Rum"]
    }
  ];

const dataAfterJohnDavisToggle = [
      {
          "name": "John Davis",
          "wont_eat": ["Fish"],
          "going":true,
          "drinks": ["Cider", "Rum", "Soft drinks"]
      },
      {
          "name": "Gary Jones",
          "wont_eat": ["Eggs", "Pasta"],
          "going":false,
          "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
      },
      {
          "name": "Robert Webb",
          "wont_eat": ["Bread", "Pasta"],
          "going":false,
          "drinks": ["Vokda", "Gin", "Whisky", "Rum"]
      },
      {
          "name": "Gavin Coulson",
          "wont_eat": [],
          "going":false,
          "drinks": ["Cider", "Beer", "Rum", "Soft drinks"]
      },
      {
          "name": "Alan Allen",
          "wont_eat": ["Meat", "Fish"],
          "going":false,
          "drinks": ["Soft drinks", "Tea"]
      },
      {
          "name": "Bobby Robson",
          "wont_eat": ["Mexican"],
          "going":false,
          "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
      },
      {
          "name": "David Lang",
          "wont_eat": ["Chinese"],
          "going":false,
          "drinks": ["Beer", "cider", "Rum"]
      }
    ];
