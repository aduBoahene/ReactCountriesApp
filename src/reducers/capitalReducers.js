import { GET_ALL_CAPITALS } from "./../types";

const initialState = {
  capitalsResponse: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CAPITALS:
      return {
        ...state,
        capitalsResponse: action.payload
      };
    default:
      return state;
  }
}
