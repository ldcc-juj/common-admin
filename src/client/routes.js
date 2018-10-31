import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';


function Loading() {
  return <div>Loading...</div>;
}

const ApiRoutesList = Loadable({
  loader: () => import('./views/ApiRoutes/Board'),
  loading: Loading,
});

const BlameList = Loadable({
  loader: () => import('./views/Blames/list'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/apiroutes/list', name: 'Api Routes', component: ApiRoutesList },
  { path: '/blame/list', name: 'Common List Component', component: BlameList }
];

export default routes;
