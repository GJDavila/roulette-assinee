import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";

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

  onSubmitForm(e) {
    e.preventDefault();
    e.stopPropagation();
    let tmp = [];
    this.state["values"]?.split(",").map((value) =>
      tmp.push({
        option: value,
        style: {
          backgroundColor: COLORS[Object.keys(tmp).length % COLORS.length],
        },
      })
    );
    console.log(this.props);
    this.props.setData && this.props.setData(tmp);
    this.props.setPage && this.props.setPage("roulette");
  }

  render() {
    return (
      <Card
        style={{
          // backgroundColor: "pink",
          marginTop: "300px",
          marginLeft: "100px",
          marginRight: "100px",
          alignSelf: "center",
        }}
      >
        <Card.Body
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginLeft: "400px",
          }}
        >
          <label>
            Users:
            <input
              style={{
                width: "500px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
              type="text"
              name="values"
              value={this.state.name}
              onChange={this.onInputchange}
            />
          </label>
          <Button onClick={this.onSubmitForm} variant="primary">
            Go!
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default AddUser;
