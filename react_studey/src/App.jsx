import React from "react";

function App() {
  const users = ["山田", "佐々木", "島田"];

  return (
    <>
      <h1>ユーザーリスト</h1>
      <ul>
        {users.map((user,index)=>{
          return <li key={index}>{user}</li>
        })}
      </ul>
    </>
  );
}

export default App;
