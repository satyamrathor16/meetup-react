import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/NewMeetup'
import MainNavigation from './components/layout/MainNavigation'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AllMeetups />,
  },
  {
    path: "/new-meetup",
    element: <NewMeetup />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
