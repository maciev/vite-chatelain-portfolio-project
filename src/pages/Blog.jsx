import React, { useEffect } from "react";
import Blogcard from "../components/BlogCard";
import Largecard from "../components/LargeCard";
import Header from "../components/Header";
import { useState } from "react";
import Layout from "../components/Layout";

function Blog() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className=" flex flex-col items-start mx-12 ">
          {/*<Largecard headerMargin="mt-16" className="mt-20" vertical={true} />*/}
          {width > 1024 ? (
            <div className="grid grid-flow-col grid-rows-4 gap-3 mt-20 w-full pt-16">
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
            </div>
          ) : (
            <div>
              <div className="">
                <Largecard headerMargin="mt-24" vertical={true} />
              </div>
              <div className="grid grid-flow-col grid-rows-2  gap-3 w-full pt-16">
                <Blogcard />
                <Blogcard />
                <Blogcard />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
