import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { listUser } = props;

  const [isShowHide, setIsShowHide] = useState(true);

  const handleShowHide = () => {
    setIsShowHide(!isShowHide);
  };

  useEffect(() => {}, []);

  return (
    <div className="display-container">
      <div>
        <span onClick={() => handleShowHide()}>
          {isShowHide === true ? "Hide List" : "Show List"}
        </span>
      </div>
      {isShowHide && (
        <>
          {listUser.map((user, index) => {
            return (
              <div key={user.id} className={user.age > 35 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
                <hr></hr>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
