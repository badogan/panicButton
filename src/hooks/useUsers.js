import { useEffect, useState } from "react";

const useUsers = () => {

  const [users, setUsers] = useState([]);

  const addUser = (newuser) => setUsers(users=>[newuser,...users])

  useEffect(() => {
    fetch("https:/jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setUsers(users));
  }, []);

  return { users, addUser };
};

export default useUsers;
