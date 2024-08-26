import { Component } from "react";

import "./App.css";

import { Notes } from "./components/Notes";
import { Form } from "./components/Form";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  // Get data from server
  fetchData = () => {
    fetch("http://localhost:7070/notes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ notes: data });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  // Handle POST request
  handlePost = (e) => {
    e.preventDefault();

    fetch("http://localhost:7070/notes", {
      method: "POST",
      body: JSON.stringify({
        content: e.target[0].value,
      }),
    });

    e.target[0].value = "";

    this.fetchData();
  };

  // Handle update
  handleUpdate = () => {
    this.fetchData();
  };

  // Handle DELETE request
  handleDelete = (el) => {
    const id = el.target.closest(".note").dataset.id;
    fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      this.fetchData();
    });
  };

  render() {
    return (
      <div className="App">
        <Notes
          notes={this.state.notes}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
        <Form handlePost={this.handlePost} />
      </div>
    );
  }
}

export default App;
