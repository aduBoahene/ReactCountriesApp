//https://restcountries.eu/rest/v2/all
import axios from "axios";
import { GET_ALL_COUNTRIES } from "../types";

export const getAllCountries = () => dispatch => {
  axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
