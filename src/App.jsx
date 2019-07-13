import React from "react";
import "./App.css";

//Components
import SearchBar from "./components/layout/SearchBar";
//React router
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./components/dashboard/MovieList";
import MovieSingleItem from "./components/dashboard/MovieSingleItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route path="/" component={MovieList} exact />
          <Route path="/:id" component={MovieSingleItem} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
