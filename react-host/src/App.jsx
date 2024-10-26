import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import counterWrapper from "remote/counterWrapper";
import "./index.scss";

const App = () => {
  const divRef = useRef(null);
  useEffect(() => {
    counterWrapper(divRef.current);
  }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: react-host</div>
    <div ref={divRef}></div>
  </div>
  )
;}
const rootElement = document.getElementById("app")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />)
}
else throw new Error("Failed to find the root element")



