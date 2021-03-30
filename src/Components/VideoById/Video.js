import React, { useEffect, useState } from "react";
import axios from "../../FetchAPI/axios";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import InforVideo from "./InforVideo";
import "./Video.css";
function Video() {
  const API_KEY = "AIzaSyAYdOYFZ1LfPTTB9bBitCviGR4TU-DeX5s";
  const { videoId } = useParams();

  const [inforVideo, setinforVideo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      // console.log("REQUEST", request.data.items[0].snippet);
      setinforVideo(request.data.items);

      return request;
    }
    fetchData();
  }, [videoId]);

  console.log("INFOR", inforVideo);
  return (
    <div className="Video">
      <ReactPlayer
        url={`https://youtu.be/${videoId}`}
        controls
        playbackRate={1}
        width="1200px"
        height="604px"
      />
      {inforVideo.map((infor) => {
        return (
          <InforVideo
            key={infor.id}
            view={infor.statistics.viewCount}
            dislike={infor.statistics.dislikeCount}
            like={infor.statistics.likeCount}
            title={infor.snippet.title}
            description={infor.snippet.description}
            channel={infor.snippet.channelTitle}
          />
        );
      })}
    </div>
  );
}

export default Video;
