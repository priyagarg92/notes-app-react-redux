import { ADD_NOTE, REMOVE_NOTE } from './action';

const initialState = [
  {
    id: 1,
    text: "Doctor's Appointment!",
    date: '02/04/2024',
  },
  {
    id: 2,
    text: 'Meeting at School!',
    date: '02/05/2024',
  },
  {
    id: 3,
    text: 'Do your Workout!',
    date: '02/06/2024',
  },
  {
    id: 4,
    text: 'Grab some Pizza!',
    date: '02/07/2024',
  },
];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.id);

    default:
      return state;
  }
};

export default noteReducer;
