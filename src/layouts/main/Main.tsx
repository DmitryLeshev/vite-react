import React, { memo } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import { Sidebar, Topbar } from '../components';

interface Props {
  route: RouteConfig;
}

export default memo(function Main({ route }: Props) {
  return (
    <>
      Main layout
      <Topbar />
      <Sidebar />
      <main>{renderRoutes(route.routes)}</main>
    </>
  );
});
