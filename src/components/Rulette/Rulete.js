import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import styled from "styled-components";

const data = [
  { option: "hi" },
  { option: "re" },
  { option: "2fe", style: { backgroundColor: "green" } },
];

const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  border-radius: 3px;
`;

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <Button onClick={handleSpinClick}>SPIN</Button>
    </>
  );
};

export default Roulette;
