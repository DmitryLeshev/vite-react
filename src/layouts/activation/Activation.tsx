import React, { memo } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import { Topbar } from '../components';

interface Props {
  route: RouteConfig;
}

export default memo(function Activation({ route }: Props) {
  return (
    <>
      Activation layout
      <Topbar />
      <main>{renderRoutes(route.routes)}</main>
    </>
  );
});
