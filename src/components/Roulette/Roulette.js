import React, { useState } from "react";
import { Container, Col, Row, Button, Form, InputGroup } from "react-bootstrap";
import { Wheel } from "react-custom-roulette";
import styled from "styled-components";
import AssigneeTable from "../AssigneeTable/AssigneeTable";

const Title = styled.div`
  justify-items: center;
  align-items: center;
  padding-bottom: 150px;
  font-size: 50px;
  font-weight: 300px;
`;

const Roulette = ({ rouletteOptions, setPage }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [story, setStory] = useState(null);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * rouletteOptions.length);
    setPrizeNumber(newPrizeNumber);

    setMustSpin(true);
  };

  return (
    <Container>
      <Title> Sprint Planning Roulette</Title>
      <Row>
        <Col lg>
          <Row>
            <div styled={{ textAlign: "center" }}>
              <Form>
                <Row>
                  <InputGroup>
                    <Form.Control
                      placeholder="Story"
                      value={story}
                      onChange={(event) => setStory(event.target.value)}
                    />
                    <Button onClick={handleSpinClick}>Start</Button>
                  </InputGroup>
                </Row>
              </Form>
            </div>
          </Row>
          <Row
            style={{
              // backgroundColor: "pink",
              marginTop: "50px",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={rouletteOptions}
              onStopSpinning={() => {
                setMustSpin(false);
                setSelectedOptions((prev) => [
                  ...prev,
                  {
                    storyName: story,
                    assigneeName: rouletteOptions[prizeNumber].option,
                  },
                ]);
              }}
            />
          </Row>
          {/* <Row>
            <Button onClick={handleSpinClick}>Start</Button>
          </Row> */}
        </Col>
        <Col lg>
          <AssigneeTable selectedOptions={selectedOptions} />
        </Col>
      </Row>

      {/* <Button
        variant="primary"
        onClick={() => {
          console.log("entre");
          setPage("addUsers");
        }}
      >
        Finish
      </Button> */}
    </Container>
  );
};

export default Roulette;
