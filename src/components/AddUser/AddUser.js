import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl, InputGroup } from "react-bootstrap";

const COLORS = [
  "#5F8BFA", //BLUE
  "#F1106B", // RED
  "#8C72CB", // PURPLE
  "#A6D960", // GREEN
  "#FCD872", // YELLOW
  "#FFB65C", //ORANGE
];
class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitForm() {
    let tmp = [];
    this.state["values"].split(",").map((value) =>
      tmp.push({
        option: value,
        style: {
          backgroundColor: COLORS[Object.keys(tmp).length % COLORS.length],
        },
      })
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <label>
          Users:
          <input
            type="text"
            name="values"
            value={this.state.name}
            onChange={this.onInputchange}
          />
        </label>
        <Button onClick={this.onSubmitForm} variant="primary">
          primary
        </Button>
      </div>
    );
  }
}

export default AddUser;
