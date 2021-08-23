import React, { useState } from "react";
import Roulette from "../Roulette/Roulette.js";
import AddUser from "../AddUser/AddUser";

const Game = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("addUsers");
  const [componentRender, setComponentRender] = useState(
    <AddUser setPage={setPage} setData={setData} />
  );

  React.useEffect(() => {
    console.log(page);

    if (page === "addUSers") {
      setComponentRender(<AddUser setPage={setPage} setData={setData} />);
    }

    if (page === "roulette") {
      setComponentRender(<Roulette rouletteOptions={data} setPage={setPage} />);
    }
  }, [page]);

  return componentRender;
};

export default Game;
