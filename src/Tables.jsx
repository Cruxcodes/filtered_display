import React, { useState, useEffect } from "react";
import { RapidTable, EvaluationTable, Accelerated } from "./Tables/Table";
import Responsive_Table from "./Tables/responsive/Responsive_Table";
import Rapid from "./Tables/responsive/Rapid";
import { rapid_resp } from "./data";

function Tables() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [type, setType] = React.useState("");

  useEffect(() => {
    setType("rapid");
  }, []);
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
    <div className="tablefill">
      <div className="selections">
        <button className="lightblue" onClick={() => setType("rapid")}>
          Rapid
        </button>
        <button className="blue" onClick={() => setType("evaluation")}>
          Evaluation
        </button>
        <button className="darkblue" onClick={() => setType("accelerated")}>
          Accelerated
        </button>
      </div>

      {type === "rapid" &&
        (windowSize.width > 768 ? (
          <RapidTable />
        ) : (
          <Responsive_Table type={type} />
        ))}
      {type === "evaluation" &&
        (windowSize.width > 768 ? (
          <EvaluationTable />
        ) : (
          <Responsive_Table type={type} />
        ))}
      {type === "accelerated" && <Accelerated />}
    </div>
  );
}

export default Tables;
