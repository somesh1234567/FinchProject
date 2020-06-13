import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CounterList from "./components/counter.component";
import TimeList from "./components/time.component";
import DataList from "./components/data.component";
import CurrencyList from "./components/currency.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/home" exact component={CounterList} />
        <Route path="/time" exact component={TimeList} />
        <Route path="/data" exact component={DataList} />
        <Route path="/currency" exact component={CurrencyList} />
      </div>
    </Router>
  );
}

export default App;
