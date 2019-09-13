import React, { useState, useEffect } from "react";
import Child from "./Child";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const URL = "http://localhost:5000/lineups";
  const fetcher = async () => {
    await axios(URL)
      .then(payload => {
        setData(JSON.parse(payload.data).lineups);
        console.log(data);
        console.log(JSON.parse(payload.data).lineups);
      })
      .catch(err => {
        console.log(err);
      });
    setTimeout(fetcher, 5000);
  };

  const getData = () => {
    return data;
  };

  useEffect(() => {
    fetcher();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <h1>Parent</h1>
      <div>
        {data.map(lineup => {
          return (
            <Child
              key={lineup.lineup_id}
              lineup_id={lineup.lineup_id}
              getData={getData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
