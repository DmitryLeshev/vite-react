import React, { memo } from 'react';
import { Link } from 'react-router-dom';
interface Props {}

export default memo(function Sidebar({}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100',
        padding: 12,
        border: '1px solid black',
      }}>
      <Link to={`/activation/step-1`}>activation</Link>
      <Link to={`/auth`}>auth</Link>
      <Link to={`/home`}>home</Link>
      <Link to={`/database/softs`}>database</Link>
      <Link to={`/devices/local`}>devices</Link>
      <Link to={`/dictionaries/protocols`}>dictionaries</Link>
      <Link to={`/errors/error-500`}>errors</Link>
      <Link to={`/reports`}>reports</Link>
      <Link to={`/settings/system`}>settings</Link>
      <Link to={`/support`}>support</Link>
      <Link to={`/users`}>users</Link>
      <Link to={`/events/tasks/in-work`}>tasks</Link>
      <Link to={`/events/incidents`}>incidents</Link>
    </div>
  );
});
