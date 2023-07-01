import React, { useState, useEffect } from "react";
import { RapidTable, EvaluationTable, Accelerated } from "./Tables/Table";

function Tables() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [type, setType] = React.useState("");

  useEffect(() => {
    // Update windowSize state whenever the window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <div className="selections">
        <button className="lightblue" onClick={() => setType("rapid")}>Rapid</button>
        <button className="blue" onClick={() => setType("evaluation")}>Evaluation</button>
        <button className="darkblue" onClick={() => setType("accelerated")}>Accelerated</button>
      </div>
      {type === "rapid" &&
        (windowSize.width > 768 ? <RapidTable /> : "the other slider comp")}
      {type === "evaluation" &&
        (windowSize.width > 768 ? (
          <EvaluationTable />
        ) : (
          "the other slider comp"
        ))}
      {type === "accelerated" && <Accelerated />}
    </div>
  );
}

export default Tables;
