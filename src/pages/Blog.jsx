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
      <div className="min-h-screen min-w-full overflow-wra bg-gray-50">
        <Header />
        <div className="flex flex-col items-start mx-12 ">
          <h1 className="ml-4">Blog 2 ✍</h1>
          <Largecard vertical={true} />
          {width > 1024 ? (
            <div className="flex flex-row gap-5 w-full pt-16">
              <Blogcard />
              <Blogcard />
              <Blogcard />
              <Blogcard />
            </div>
          ) : (
            <div>
              <div className="">
                <Largecard vertical={true} />
              </div>
              <div className="flex flex-row gap-5 w-full pt-16">
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
