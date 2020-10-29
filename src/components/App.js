import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import API from "../API/unsplash.js";
import SearchBar from "./SearchBar";
import ItemsList from "./ItemsList";

class App extends React.Component {
  state = { items: [] };

  onSearchSubmit = async (term) => {
    const response = await API.get("search/photos", {
      params: {
        query: term,
        client_id: "6XZYlu78ke8wbBa7eiep6DqgrIErf8eXIAsDD_jR2CM",
      },
    });
    this.setState({ items: response.data.results });
    console.log(this.state.items);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar uponSubmit={this.onSearchSubmit} />
        <ItemsList listitems={this.state.items} />
      </div>
    );
  }
}

export default App;
