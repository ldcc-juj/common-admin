import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';


function Loading() {
  return <div>Loading...</div>;
}

const ApiRoutesBoard = Loadable({
  loader: () => import('./views/ApiRoutes/Board'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/apiroutes/list', name: 'Api Routes', component: ApiRoutesBoard },
];

export default routes;
