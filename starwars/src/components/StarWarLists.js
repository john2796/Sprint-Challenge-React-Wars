import React from "react";
import StarWar from "./StarWar";

const StarWarLists = ({ filteredArr }) => {
  return filteredArr.map(char => (
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
