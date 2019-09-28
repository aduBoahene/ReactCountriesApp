import { combineReducers } from "redux";
import compReducers from "./compReducers";
import capitalReducers from "./capitalReducers";

export default combineReducers({
  comp: compReducers,
  capi: capitalReducers
});
