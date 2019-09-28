import React, { Component } from "react";
import { Provider } from "react-redux";
//import { createStore, applyMiddleware } from "redux";
import Home from "./components/home";

import store from "./store";

//const store = createStore(() => [], {}, applyMiddleware([]));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
