import React, { useState, useEffect } from "react";

const SimpleFetch = () => {
  const [data, setData] = useState("no data");

  useEffect(() => {
    console.log("executing fetch");
    fetch("http://127.0.0.1:8080/helloWorld", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())

      .then((json) => setData(json.message));
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default SimpleFetch;
