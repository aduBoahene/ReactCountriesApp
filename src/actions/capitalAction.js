import axios from "axios";
import { GET_ALL_CAPITALS } from "../types";

export const getAllCapitals = (cap) => dispatch => {
  axios
    .get("https://restcountries.eu/rest/v2/capital/"+cap)
    .then(res => {
      dispatch({
        type: GET_ALL_CAPITALS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
