import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   // thay doi du lieu thi giao dien thay doi theo
//   // state la syntax

//   state = {
//     listUser: [
//       { id: 1, name: "Ski", age: 30 },
//       { id: 2, name: "Bi", age: 35 },
//       { id: 3, name: "Di", age: 40 },
//     ],
//   };
//   handleAddUser = (obj) => {
//     this.setState({
//       listUser: [obj, ...this.state.listUser],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUser;
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUser: listUserClone,
//     });
//   };

//   // JSX
//   render() {
//     // DRY: don't repeat yourself
//     const myAge = 50;
//     return (
//       <>
//         <AddUserInfor handleAddUser={this.handleAddUser} />
//         <hr />
//         <DisplayInfor
//           listUser={this.state.listUser}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//         <br />
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Ski", age: 30 },
    { id: 2, name: "Bi", age: 35 },
    { id: 3, name: "Di", age: 40 },
  ]);

  const handleAddUser = (obj) => {
    setListUser([obj, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone);
  };
  return (
    <>
      <AddUserInfor handleAddUser={handleAddUser} />
      <hr />
      <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
      <br />
    </>
  );
};

export default MyComponent;
