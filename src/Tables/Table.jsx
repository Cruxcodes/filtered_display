import React from "react";
import TableData from "./TableData";
import { rapid, evaluation, conventional, emphatic } from "../data";

export function RapidTable() {
  return (
    <div className="table">
      <div className="header">
        <div></div>
        {rapid.amount.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__target target">
        <div className="target__title title">
          <p>Target</p>
        </div>
        <div className="span">
          <p>
            No Targets – You get paid 12% of the profits you earn in your
            account
          </p>
        </div>
      </div>
      <div className="table__tradingdays">
        <div className="tradingdays__title title">
          <p>Minimum Trading Days</p>
        </div>
        <div className="span">
          <p>3 times per week</p>
        </div>
      </div>
      <div className="table__drowdown">
        <div className="title">
          <p>Daily Starting Drawdown</p>
        </div>
        {rapid.starting.map((drawdown, index) => {
          return (
            <TableData data={`$${drawdown.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__overall">
        <div className="title">
          <p>Overall Drawdown</p>
        </div>
        {rapid.drawdown.map((drawdown, index) => {
          return (
            <TableData data={`$${drawdown.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__leverage">
        <div className="title">
          <p>Available Leverage</p>
        </div>
        <div className="span">
          <p>15:00</p>
        </div>
      </div>
      <div className="table__registration">
        <div className="title">
          <p>Refundable Registration Fee</p>
        </div>
        {rapid.registration.map((registration, index) => {
          return (
            <TableData data={`$${registration.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__monthly">
        <div className="title">
          <p>Monthly Fees</p>
        </div>
        <div className="span">
          <p>No Monthly Fees</p>
        </div>
      </div>
      <div className="table__plans">
        <div></div>
        {rapid.plans.map((link) => {
          return <a href={link}>Select Plan</a>;
        })}
      </div>
    </div>
  );
}

export function EvaluationTable() {
  return (
    <div className="evaluation table">
      <div className="header">
        <div></div>
        {evaluation.amount.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__target target">
        <div className="target__title title">
          <p>Target</p>
        </div>
        <div className="span">
          <p
            style={{
              padding: "14.5px",
            }}
          >
            Phase I – Evaluation Phase = 8% <br /> Phase II – Establishment
            Phase = 5%
          </p>
        </div>
      </div>
      <div className="table__tradingdays">
        <div className="tradingdays__title title">
          <p>Minimum Trading Days</p>
        </div>
        <div className="span">
          <p>5 Days</p>
        </div>
      </div>
      <div className="table__drowdown">
        <div className="title">
          <p>Daily Starting Drawdown</p>
        </div>
        {evaluation.daily_drawdown.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__overall">
        <div className="title">
          <p>Overall Drawdown</p>
        </div>
        {evaluation.overall_drawdown.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__leverage">
        <div className="title">
          <p>Available Leverage</p>
        </div>
        <div className="span">
          <p>15:00</p>
        </div>
      </div>
      <div className="table__registration">
        <div className="title">
          <p>Refundable Registration Fee</p>
        </div>
        {evaluation.registration.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__monthly">
        <div className="title">
          <p>Monthly Fees</p>
        </div>
        <div className="span">
          <p>No Monthly Fees</p>
        </div>
      </div>
      <div className="table__plans">
        <div></div>
        {evaluation.plans.map((link) => {
          return <a href={link}>Select Plan</a>;
        })}
      </div>
    </div>
  );
}

export function Accelerated() {
  const [type, setType] = React.useState("");
  return (
    <div>
      <div className="buttons">
        <button onClick={() => setType("conventional")}>Conventional</button>
        <button onClick={() => setType("emphatic")}>Emphatic</button>
      </div>

      {type === "conventional" && <Conventional />}
      {type === "emphatic" && <Emphatic />}
    </div>
  );
}

function Conventional() {
  return (
    <div className="conventional table">
      <div className="header">
        <div></div>
        {conventional.amount.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__target target">
        <div className="target__title title">
          <p>Target</p>
        </div>
        <div className="span">
          <p>10% to get to next milestone</p>
        </div>
      </div>
      <div className="table__drowdown">
        <div className="title">
          <p>Daily Starting Drawdown</p>
        </div>
        <div className="span">
          <p>No Daily Drawdown Limits</p>
        </div>
      </div>
      <div className="table__overall">
        <div className="title">
          <p>Overall Drawdown</p>
        </div>
        <div className="span">
          <p>5% of Starting Account Balance</p>
        </div>
      </div>
      <div className="table__tradingdays">
        <div className="tradingdays__title title">
          <p>Assured Funding</p>
        </div>
        {conventional.assured_funding.map((registration, index) => {
          return (
            <TableData data={`$${registration.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__leverage">
        <div className="title">
          <p>Available Leverage</p>
        </div>
        <div className="span">
          <p>1:50</p>
        </div>
      </div>
      <div className="table__registration">
        <div className="title">
          <p>One Time Registration Fee</p>
        </div>
        {conventional.onetime_fee.map((registration, index) => {
          return (
            <TableData data={`$${registration.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__plans">
        <div></div>
        {conventional.plans.map((link) => {
          return <a href={link}>Select Plan</a>;
        })}
      </div>
    </div>
  );
}

function Emphatic(){
  return (
    <div className="conventional table">
      <div className="header">
        <div></div>
        {conventional.amount.map((data, index) => {
          return <TableData data={`$${data.toLocaleString()}`} key={index} />;
        })}
      </div>
      <div className="table__target target">
        <div className="target__title title">
          <p>Target</p>
        </div>
        <div className="span">
          <p>20% to get to next milestone</p>
        </div>
      </div>
      <div className="table__drowdown">
        <div className="title">
          <p>Daily Starting Drawdown</p>
        </div>
        <div className="span">
          <p>No Daily Drawdown Limits</p>
        </div>
      </div>
      <div className="table__overall">
        <div className="title">
          <p>Overall Drawdown</p>
        </div>
        <div className="span">
          <p>10% of Starting Account Balance</p>
        </div>
      </div>
      <div className="table__tradingdays">
        <div className="tradingdays__title title">
          <p>Assured Funding</p>
        </div>
        {conventional.assured_funding.map((registration, index) => {
          return (
            <TableData data={`$${registration.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__leverage">
        <div className="title">
          <p>Available Leverage</p>
        </div>
        <div className="span">
          <p>1:100</p>
        </div>
      </div>
      <div className="table__registration">
        <div className="title">
          <p>One Time Registration Fee</p>
        </div>
        {conventional.onetime_fee.map((registration, index) => {
          return (
            <TableData data={`$${registration.toLocaleString()}`} key={index} />
          );
        })}
      </div>
      <div className="table__plans">
        <div></div>
        {emphatic.plans.map((link) => {
          return <a href={link}>Select Plan</a>;
        })}
      </div>
    </div>
  );
}