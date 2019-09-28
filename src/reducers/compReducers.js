import { GET_ALL_COUNTRIES } from "../types";

const initialState = {
  competitionsResponse: [],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        competitionsResponse: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
