import React from "react";
import "./StatisticRow.css";

function StatisticRow({ Icon, text }) {
  return (
    <div className="statisticRow">
      <Icon />
      <p>{text}</p>
    </div>
  );
}

export default StatisticRow;
