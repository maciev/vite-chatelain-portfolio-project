import React from "react";

export default function BlogCard({ vertical }) {
  //console.log(props);
  if ({ vertical } == true) {
    return <div>true</div>;
  } else {
    return (
      <div className="flex flex-col items-center w-72">
        <img
          className="rounded"
          src="https://dwinawan.com/blog/thumb_article9.jpg"
          alt=""
        />

        <div className="flex flex-col items-start w-full max-w-lg mt-2 ">
          <h1 className="pb-2 text-xs font-bold text-gray-400">June 9, 2021</h1>
          <h3 className="pb-2 text-lg font-bold">
            How to easily pass Props to React Components
          </h3>
          <p className="pb-2 text-xs font-bold leading-5 text-gray-400">
            There are several ways to pass props and state in React. In this
            blog, we'll show you the most efficient way.'
          </p>
        </div>
      </div>
    );
  }
}
