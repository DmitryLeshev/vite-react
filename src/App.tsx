import React, { memo, Suspense, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useHistory } from 'react-router-dom';

interface Props {
  routes: any[];
}

export default memo(function App({ routes }: Props) {
  const history = useHistory();
  const { pathname } = window.location;

  useEffect(() => {
    if (pathname !== '/') return;
    history.push('/home');
  }, [pathname]);

  return (
    <>
      <Suspense fallback="loading">{renderRoutes(routes)}</Suspense>
    </>
  );
});
