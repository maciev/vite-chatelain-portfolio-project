import React, { useEffect } from "react";

export default function LargeCard() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 600;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      {width > breakPoint ? (
        <div className="flex flex-row items-center mt-12 ml-4 ">
          <img
            className="rounded max-w-12 "
            src="https://dwinawan.com/blog/thumb_article9.jpg"
            alt=""
          />

          <div className="flex flex-col w-full ml-4 ">
            <h1 className="pb-2 text-xs font-bold text-gray-400">
              June 9, 2021
            </h1>
            <h3 className="pb-2 text-lg font-bold">
              How to easily pass Props to React Components
            </h3>
            <p className="pb-2 text-xs font-bold leading-5 text-gray-400">
              There are several ways to pass props and state in React. In this
              blog, we'll show you the most efficient way.'
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-12 ml-4 ">
          <img
            className="rounded max-w-12 "
            src="https://dwinawan.com/blog/thumb_article9.jpg"
            alt=""
          />

          <div className="flex flex-col w-full ml-4 ">
            <h1 className="pb-2 text-xs font-bold text-gray-400">
              June 9, 2021
            </h1>
            <h3 className="pb-2 text-lg font-bold">
              How to easily pass Props to React Components
            </h3>
            <p className="pb-2 text-xs font-bold leading-5 text-gray-400">
              There are several ways to pass props and state in React. In this
              blog, we'll show you the most efficient way.'
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
