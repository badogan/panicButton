import React from "react";
import useUsers from "../hooks/useUsers";

const UserList = () => {
  const { users, addUser } = useUsers();

  const addNico = () => addUser({ name: "Nicolas" });

  return (
    <div>
      <button onClick={addNico}>ADD NICOLAS</button>
      <ul>
        {users.map((user,index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
