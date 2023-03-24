import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="opacity-75 bg-gradient-to-tl  from-white to-blue-900">
        <Header />

        <main className="">{children}</main>

        <footer className="fixed bottom-0">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https:chatela.in">Made with Vite + React</a>
        </footer>
      </div>
    </>
  );
}
