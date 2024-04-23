import React from 'react';

function ProfileInfo(props) {
  return (
    <div className="profile-info">
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileInfo;