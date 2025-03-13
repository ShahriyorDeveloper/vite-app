import { Fragment } from "react";

function App() {
  let age = 16;
  let color = false;

  let users = [
    { name: "john", surname: "Due", age: 23 },
    { name: "john2", surname: "Due2", age: 25 },
  ];

  return (
    <Fragment>
      <h1
        // style={{ color: `${color ? "red" : "blue"}` }}
        className={`text-3xl ${
          color ? "text-red-300" : "text-blue-300"
        } font-bold  underline`}
      >
        Hello world!
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {users.map((user) => {
          return (
            <div className="border ">
              <h2>Name: {user.name}</h2>
              <h2>Surname: {user.surname}</h2>
              <h2>Age: {user.age}</h2>
            </div>
          );
        })}
      </div>

      {age >= 18 ? <h2>kirish mumkin</h2> : null}
    </Fragment>
  );
}

export default App;
