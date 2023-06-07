import { useState } from "react";

const Challenge = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  let result = 0;

  const HandleSum = () => {
    result = num1 + num2;
    console.log('O resultado é igual a: ', result)
  };

  return (
    <>
      <div>
          <h3>numero 1 = {num1}</h3>
          <h3>numero 2 = {num2}</h3>
          <button onClick={HandleSum}>Somar</button>
      </div>
    </>
  );
};

export default Challenge;
