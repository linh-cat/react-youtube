import React from "react";
import "./InforVideo.css";
import StatisticRow from "./StatisticRow";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

function InforVideo({ like, dislike, view, title, description, channel }) {
  return (
    <div className="inforVideo">
      <div className="inforVideo__title">
        <div>
          <h3>{title}</h3>
          <p>{parseInt(view).toFixed(2)} Views</p>
        </div>
        <p>{channel}</p>
      </div>
      <div className="infor__statistics">
        <StatisticRow Icon={ThumbUpAltIcon} text={like} />

        <StatisticRow Icon={ThumbDownAltIcon} text={dislike} />
      </div>
      <div className="inforVideo__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InforVideo;
