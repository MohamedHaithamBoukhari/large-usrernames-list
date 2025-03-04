import React from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Sidebar = ({ onSelectLetter }) => {
  return (
    <>
      <style>{`
        .hover-effect:hover {
          background: #f0f0f0;
          transition: background 0.3s;
        }
      `}</style>
      <div class="d-flex w-100 justify-content-between bg-primary ">
        {letters.map((letter) => (
          <div role="button" class="px-3 py-2 bg-white rounded text-center fw-bold hover-effect" key={letter} onClick={() => onSelectLetter(letter)}>
            {letter}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
