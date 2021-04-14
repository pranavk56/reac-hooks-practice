import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [pending, setPending] = useState([
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5"
  ]);
  const [inprogress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handlePending = (index) => {
    let li = pending.splice(index, 1);
    setPending(pending);
    setInProgress(inprogress.concat(li));
  };

  const handleInProgress = (index) => {
    let li = inprogress.splice(index, 1);
    setInProgress(inprogress);
    setCompleted(completed.concat(li));
  };

  return (
    <div className="App">
      <p>
        You have 5 tasks in Pending State, When onclick, the particular task
        should move to Inprogress State
      </p>{" "}
      <p>
        If its in Inprogress State, When onclick, the particular task should
        move to completed state.
      </p>
      <h2>Pending Task</h2>{" "}
      <p>
        {pending.map((val, index) => {
          return (
            <li key={index} onClick={() => handlePending(index)}>
              {val}
            </li>
          );
        })}
      </p>{" "}
      <h2>Inprogress Task</h2>
      {inprogress.length ? (
        <p>
          {inprogress.map((val, index) => {
            return (
              <li key={index} onClick={() => handleInProgress(index)}>
                {val}
              </li>
            );
          })}
        </p>
      ) : (
        ""
      )}{" "}
      <h2>Completed Task</h2>
      {completed.length ? (
        <p>
          {completed.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </p>
      ) : (
        ""
      )}{" "}
    </div>
  );
}
