import React from "react";
// import Login from "./pages/Login";
import {
  goBack,
  goTo,
  popToTop,
  Link,
  Router,
} from "react-chrome-extension-router";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* <Login /> */}
      <Home />
    </Router>
  );
}

export default App;
