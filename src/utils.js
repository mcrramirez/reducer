import React from "react";
//emulate api call with dely of one second
export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "mike" && password === "pass") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
