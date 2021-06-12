import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

interface Props {
  route: any;
}

export default memo(function Home({ route }: Props) {
  return (
    <div>
      <h1>Home</h1>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
});
