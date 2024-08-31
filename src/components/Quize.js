import React from "react";

export const Quize = () => {
  function onNext() {
    console.log("onNext");
  }

  function onPrev() {
    console.log("onPrev");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quize Application</h1>
      {/* display question */}

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};
