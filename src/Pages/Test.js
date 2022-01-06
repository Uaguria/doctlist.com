import React from "react";

const Test = (props) => {
  const { doctors } = props;
  return (
    <div>
      {doctors.map((currentData, index) => (
        <ul>
          <li key={index}>
            <h1>{currentData.firstname}</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              dolores necessitatibus labore nam est nesciunt, quis sit atque
              velit dolore modi earum obcaecati, neque cum ipsam, blanditiis
              eaque odit repellat.
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Test;
