import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
// import Home from '../pages/Home/Home';
// import About from '../pages/About/About';
// import NotFound from '../pages/NotFound/NotFound';
// import Users from '../pages/Users/Users';
// import UserDetails from '../pages/UserDetails/UserDetails';
// import UserPosts from './UserPosts/UserPosts';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));

const About = lazy(() => import('../pages/About/About'));
const Users = lazy(() => import('../pages/Users/Users'));
const UserPosts = lazy(() => import('./UserPosts/UserPosts'));
const UserDetails = lazy(() => import('../pages/UserDetails/UserDetails'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />

          <Route path="/users/:userId" element={<UserDetails />}>
            <Route path="address" element={<h2>Address</h2>} />
            <Route path="posts" element={<UserPosts />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};
