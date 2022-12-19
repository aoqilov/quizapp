import React, { useRef } from "react";

export default function Login({ setUser }) {
  const inputRef = useRef();

  const startGame = () => {
    setUser(inputRef.current.value);
  };

  return (
    <div>
      <div className="login">
        <div className="box">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtE9qre2fe6UhBO0dLcTmK4hZjAQNQhq6ov8Y6sflRECkLzN9hsGa_cr9uFpIUPw5usqQ&usqp=CAU"
              alt="logo"
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              placeholder="enter your name"
              className="inputN"
              ref={inputRef}
            />
            <button className="start" onClick={startGame}>
              start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
