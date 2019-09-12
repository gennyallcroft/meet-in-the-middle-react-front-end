import React from "react";

class ResetButton extends React.Component {

  render() {
    return (
      <input
        onClick={this.props.onClick}
        id="add_location"
        className="myButton"
        type="submit"
        value="DO NOT PRESS"
      />
    );
  }
}

export default ResetButton;
