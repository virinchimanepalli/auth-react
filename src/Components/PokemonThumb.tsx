import React from "react";
import LogoutButton from "./LogoutButton";

interface IPokemonThumb {
  id: any;
  image: string;
  name: string;
  type: any;
}

const PokemonThumb = ({ id, image, name, type }: IPokemonThumb) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          marginLeft: "10px",
          marginTop: "10px",
          flexDirection: "column",
        }}
      >
        <small>#0{id}</small>

        <img
          src={image}
          style={{ width: "200px", height: "300px" }}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div>
    </>
  );
};

export default PokemonThumb;
