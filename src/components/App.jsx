import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import  Layout  from './webPage/Layout';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Start = lazy(() => import('./webPage/StartPage'));
const Reviews = lazy(() => import('./webPage/Reviews'));
const Movies = lazy(() => import('./webPage/Film'));
const Roles = lazy(() => import('./webPage/Roles'));
const  Setting = lazy(()=> import('./webPage/SettingMovies'))

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Start />} />
        {/* <Route path={''} element={<Start />} /> */}
        <Route path="/movies" element={<Movies />} />
        <Route path='movies/:movieId' element={<Setting />}>
        <Route path="roles" element={<Roles />} />
        <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

<Route path='*' element={<p>Page not Found</p>} />

    </Routes>
  );
};
