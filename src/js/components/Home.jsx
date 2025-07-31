import React, { useState } from "react";
import ChooseWeapon from "./ChooseWeapon";
import Title from "./Title";
import GameBoard from "./GameBoard";

//include images into your bundle
//create your first component
const Home = () => {
  const [selectedWeapon, setSelectedWeapon] = useState("");
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const weaponSelection = (weapon, player1, player2) => {
    setSelectedWeapon(weapon);
    setPlayer1Name(player1);
    setPlayer2Name(player2);
  };

  return (
    <div
      className="container-fluid min-vh-100 text-white d-flex flex-column align-items-center p-2"
      style={{ background: "rgb(63, 62, 62)" }}
    >
      <Title />
      {selectedWeapon !== "" ? (
        <GameBoard
          selectedWeapon={selectedWeapon}
          player1Name={player1Name}
          player2Name={player2Name}
        />
      ) : (
        <ChooseWeapon weaponSelection={weaponSelection} />
      )}
    </div>
  );
};

export default Home;
