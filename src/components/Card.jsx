import React from "react";

export default function Card({ video, title, stack, description, date }) {
  return (
    <div className="flex flex-col items-center py-4 mx-auto">
      <video
        className="w-4/5 rounded-lg shadow-md"
        src={video}
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop="loop"
        track="true"
        muted="muted"
        playsInline="playsInline"
      ></video>
      <div className="flex flex-col items-start px-4 py-2 mt-4 bg-white rounded-md shadow-md md:w-4/5">
        <h1 className="pb-2 text-lg font-bold">{title}</h1>
        <h3 className="pb-2 text-sm font-bold">{stack}</h3>
        <p className="pb-2">{description}</p>

        <div className="pb-2 text-xs font-bold text-gray-500">{date}</div>

        <div className="w-full text-sm font-semibold">
          <a>SEE IT IN ACTION</a>
        </div>
      </div>
    </div>
  );
}
