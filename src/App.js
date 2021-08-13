import "./App.css";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);
  const hello = useRef(() => console.log("hello"));

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;

// useEffect(() => {
//   const onMouseMove = e =>{
//     console.log(e);
//   }
//   window.addEventListener('mousemove', onMouseMove)

//   return () => {
//     window.removeEventListener('mousemove', onMouseMove)
//   };
// }, [values.email]);

// useEffect(() => {
//   console.log("mount1");
// }, []);

// useEffect(() => {
//   console.log("mount2");
// }, []);

// useLayoutEffect(() => {
//   console.log(inputRef.current.getBoundingClientRect());
// }, []);
