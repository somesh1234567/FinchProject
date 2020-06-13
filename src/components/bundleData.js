import React from "react";

export default function bundleData(props) {
  const { dataOptions } = props;

  return (
    <div>
      {dataOptions.map((option) => {
        return (
          <ul>
            <li>{option}</li>
          </ul>
        );
      })}
    </div>
  );
}
