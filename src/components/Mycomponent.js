import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // thay doi du lieu thi giao dien thay doi theo
  // state la syntax

  state = {
    listUser: [
      { id: 1, name: "Ski", age: 30 },
      { id: 2, name: "Bi", age: 35 },
      { id: 3, name: "Di", age: 40 },
    ],
  };
  handleAddUser = (obj) => {
    this.setState({
      listUser: [obj, ...this.state.listUser],
    });
  };
  // JSX
  render() {
    // DRY: don't repeat yourself
    const myAge = 50;
    return (
      <div>
        <AddUserInfor handleAddUser={this.handleAddUser} />
        <hr />
        <DisplayInfor listUser={this.state.listUser} />
        <br />
      </div>
    );
  }
}

export default MyComponent;
