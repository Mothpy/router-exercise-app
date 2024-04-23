import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});

  // Use `useParams()` and `useEffect()`
  const {userId} = useParams();

  useEffect(() => {
    // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}
    async function loadUser() {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const userFromAPI = await response.json();
        setUser(userFromAPI);
    }
    loadUser();
  }, [userId]);

  // No need to change anything below here
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
}

export default UserProfile;
