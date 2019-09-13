import React, { useState, useEffect } from "react";

export default function Child(props) {
  const [data, setData] = useState(props.getData());

  return (
    <div>
      <div>child</div>
      {data.map(lineup => {
        return lineup.lineup_id === props.lineup_id ? (
          <div key={lineup.lineup_id}>{lineup.lineup_points}</div>
        ) : null;
      })}
    </div>
  );
}
