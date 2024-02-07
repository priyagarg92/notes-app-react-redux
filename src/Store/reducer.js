import { ADD_NOTE, IS_EDITABLE, REMOVE_NOTE, UPDATE_NOTE } from "./action";

const initialState = [
  {
    id: 1,
    text: "Doctor's Appointment!",
    date: "02/04/2024",
    isEditable: false,
  },
  {
    id: 2,
    text: "Meeting at School!",
    date: "02/05/2024",
    isEditable: false,
  },
  {
    id: 3,
    text: "Do your Workout!",
    date: "02/06/2024",
    isEditable: false,
  },
  {
    id: 4,
    text: "Grab some Pizza!",
    date: "02/07/2024",
    isEditable: false,
  },
];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.id);

    case IS_EDITABLE:
      state.map((note) => {
        if (note.id === action.id) {
          note.isEditable = true;
        }
        console.log(note);
        return note;
      });
      return [...state];

    case UPDATE_NOTE:
      const existingNote = state.find((note) => note.id === action.payload.id);
      const nonUpdatedNotes = state.filter(
        (note) => note.id !== action.payload.id
      );
      if (existingNote) {
        return [...nonUpdatedNotes, action.payload];
      } else {
        return [...state, action.payload];
      }

    default:
      return state;
  }
};

export default noteReducer;
