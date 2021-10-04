import React from "react";

const Completedlist = (props) => {
  return (
    <div>
      <h2>Completed</h2>
      <ul>
        {props.completedItems.map((item) => {
          console.log(item);
          return (
            <li>
              {item}
              <button>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Completedlist;
