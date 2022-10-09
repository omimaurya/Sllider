import { useState } from "react";

const Slider = () => {
  const [count, setCount] = useState(0);

  const data = [{ name: "Hariom" }, { name: "Subodh" }, { name: "Shristi" }];
  const len = data.length - 1;
  const prv = () => {
    setCount(count === 0 ? count - 1 : 0);
  };
  const nxt = () => {
    setCount(count === len ? 0 : count + 1);
  };
  return (
    <>
      {data.map((ele, ind) => {
        return <div key={ind}>{ind === count && ele.name}</div>;
      })}

      <button onClick={prv}>prv</button>
      <button onClick={nxt}>nxt</button>
    </>
  );
};
export default Slider;
