import React, { Component } from "react";
import image from "./images/pexels.jpeg";
class App extends Component {
  state = {
    person: {
      fullName: "ibrahim",
      bio: "iamhere",
      imgsrc: image,
      profession: "developper",
      shows: false,
    },
  };
  handleClick = () => {
    this.setState((prevState) => {
      let person = Object.assign({}, prevState.person);
      person.shows = !person.shows;
      return { person };
    });
  };
  render() {
    if (this.state.person.shows === false) {
      return (
        <>
          <h1>nothing to show</h1>
          <button onClick={this.handleClick}>show profile</button>
        </>
      );
    }
    return (
      <>
        <img src={this.state.person.imgsrc} alt="stock img" />
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}</h2>
        <h2>{this.state.person.profession} </h2>
        <button onClick={this.handleClick}>show profile</button>
      </>
    );
  }
}

export default App;
