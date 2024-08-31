import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
export const Main = () => {
  const inputRef = useRef(null);

  return (
    <>
    <div className="container">
      <h1 className="title text-light">Quize Application</h1>
      <ol>
        <li> You Will asked 10 questions one after another </li>
        <li>10 Points is awarded for the correct answer .</li>
        <li>Each Question has three options. You can Choose only one option</li>
        <li>You Can review and change answers before the quizfinish</li>
        <li>the result will be declared at the end of the quize</li>
      </ol>
      <form id="form">
        <input
          ref={inputRef}
          type="text"
          className="userid"
          placeholder="username"
        />
      </form>
      <div className="start">
        <Link className="btn" to={"/Quize"}>
          Start Quize
        </Link>
      </div>
    </div>
    <footer className="footer">
      &copy; copyrights 2024
    </footer>
    </>
  );
};
