import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "Vinh",
    address: "DiAn",
    age: "20",
  };

  handleOnChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleOnChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddUser({
      id: Math.floor(Math.random() * 100 + 1) + 5,
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(e) => this.handleOnChangeName(e)}
          />
          <br />
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(e) => this.handleOnChangeAge(e)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
