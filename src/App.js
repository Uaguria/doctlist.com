import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./Component/Header";
import Footer from "./Component/Footer";

// import Pages
import Index from "./Pages/Index";
import About from "./Pages/About";
import SearchResult from "./Pages/SearchResult";
import Contact from "./Pages/Contact";
import Test from "./Pages/Test";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
          <Route exact path="/find" component={SearchResult} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
