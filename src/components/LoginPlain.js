import React, { useState, useReducer } from "react";
import { login } from "../utils";
function loginReducer(state, action) {
  switch (action.type) {
    case "login":
      //console.log({ action });
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    case "success":
      return {
        ...state,
        username: "",
        password: "",
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    case "error":
      return {
        ...state,
        error: "invalid name and/or password!",
        isLoading: false,
        isLoggedIn: false,
      };
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "logout":
      return { ...state, isLoggedIn: false };
    default:
      break;
  }
  return state;
}
const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};
export const LoginPlain = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, error, isLoading, isLoggedIn } = state;
  console.log({ state });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("todo");

    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      console.log("failed login");
      dispatch({ type: "error" });
    }
  };

  return (
    <div className='App'>
      <div className='login-container'>
        {error !== "" && <div className='error'>Error: {error}</div>}
        {isLoggedIn ? (
          <>
            <p>{username} logged in successfully!</p>
            <button
              onClick={() => {
                dispatch({ type: "logout" });
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <form onSubmit={onSubmit}>
            <p>Please login!</p>
            <input
              type='text'
              placeholder='Enter login name...'
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.currentTarget.value,
                })
              }
              value={username}
            ></input>
            <br />
            <input
              type='password'
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.currentTarget.value,
                })
              }
              placeholder='Enter password'
              autoComplete='new-password'
              value={password}
            ></input>
            <br />
            <br />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
