import React from "react";

function Rapid({
  amount,
  target,
  trading_Days,
  drawdown,
  overall_drawdown,
  leverage,
  fees,
  to_plan
}) {
  return (
    <div className="resp">
      <header>${amount?.toLocaleString()}</header>
      <p className="resp__title">Target</p>
      <p className="value">{target}</p>
      <p className="resp__title">Minimum Trading Days</p>
      <p className="value">{trading_Days}</p>
      <p className="resp__title">Daily Starting Drawdown</p>
      <p className="value">${drawdown?.toLocaleString()}</p>
      <p className="resp__title">Overall Drawdown</p>
      <p className="value">${overall_drawdown?.toLocaleString()}</p>
      <p className="resp__title">Available Leverage</p>
      <p className="value">{leverage}</p>
      <p className="resp__title">Monthly Fees</p>
      <p className="value">{fees}</p>
      <div className="resp__link">
        <a href={to_plan}>Select Plan</a>
      </div>
    </div>
  );
}

export default Rapid;
