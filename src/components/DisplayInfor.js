import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = {
    isShow: true,
  };
  handleShow = (e) => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    const { listUser } = this.props;
    return (
      <div className="display-container">
        <div>
          <span
            onClick={(e) => {
              this.handleShow();
            }}
          >
            {this.state.isShow === true ? "Hide list" : "Show list"}
          </span>
        </div>
        {this.state.isShow && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={user.age > 35 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <br></br>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
