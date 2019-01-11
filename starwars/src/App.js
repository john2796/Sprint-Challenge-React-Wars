import React, { Component } from "react";
import "./App.css";
import StarWarLists from "./components/StarWarLists";
import Form from "./components/Form";
import Fuse from "fuse.js";
import Pagination from "./components/Pagination";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      text: "",
      searchText: "",
      next: "",
      previous: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }
  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.searchTodos(this.state.searchText)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      text: "",
      searchText: ""
    });
  };

  searchTodos = searchQuery => {
    this.setState({
      queriedTodos:
        searchQuery === ""
          ? this.state.starwarsChars
          : new Fuse(
              this.state.starwarsChars,
              {
                tokenize: true,
                threshold: 0,
                location: 0,
                keys: ["task"]
              },
              searchQuery
            ).search(searchQuery)
    });
  };

  getCharacters = URL => {
    fetch(URL, {
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = e => {
    e.preventDefault();
    this.getCharacters(this.state.next);
  };

  previousPage = e => {
    e.preventDefault();
    this.getCharacters(this.state.previous);
  };

  render() {
    const { starwarsChars, searchText } = this.state;

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Form
          searchText={searchText}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleKeyDown={this.handleKeyDown}
        />
        <Pagination
          nextPage={this.nextPage}
          previousPage={this.previousPage}
          next={this.state.next}
          previous={this.state.previous}
        />
        <Grid container justify="center" spacing={16}>
          <StarWarLists starwarsChars={starwarsChars} />
        </Grid>
      </div>
    );
  }
}

export default App;
