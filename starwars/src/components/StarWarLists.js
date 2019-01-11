import React from "react";
import StarWar from "./StarWar";

const StarWarLists = ({ starwarsChars }) => {
  return starwarsChars.map(char => (
    <div
      key={char.created}
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <StarWar char={char} />
    </div>
  ));
};

export default StarWarLists;
