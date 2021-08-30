/* eslint-disable no-unused-vars */
import React from "react";

type IButton = {
  onClick?: React.MouseEventHandler;
  name: string;
  css?: React.CSSProperties;
};

export const Button = ({ onClick, name, css }: IButton) => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
        backgroundColor: "#5550F8",
        borderRadius: 15,
        padding: "0.5%",
        paddingRight: "2%",
        paddingLeft: "2%",
        color: "white",
        fontFamily: "Nunito",
        fontSize: "0.9em",
        cursor: "pointer",
        marginTop: "17%",
        marginLeft: "40%",
        width: "7%",
        textAlign: "center",

        ...css,
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
