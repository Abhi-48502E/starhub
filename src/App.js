import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import './App.css'
import Footer from "./components/Footer/Footer";
import Login from './pages/Login/Login'
import Signup from './pages/Signup/SignUp'
import Profile from "./components/Profile/Profile";
import Services from './components/services/Services'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import HireArtist from "./components/HireArtist/HireArtist";
import Category from './components/Category/Category'
import Help from "./components/Help/Help";
import AboutCategory from "./components/Category/AboutCategory";
import ReportUs from "./components/Report_us/ReportUs";
import Particles from "./components/Particles/Particles";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },]
  },
  {
    path: '/hireartist',
    element: <HireArtist />
  },
  {
    path: '/categories',
    element: <Category />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/what-is-hire-artist',
    element: <AboutCategory />
  },
  {
    path: '/login',
    element: <Login />

  },
  {
    path: '/register',
    element: <Signup />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/report-us',
    element: <ReportUs />
  },
  {
    path: '/particles',
    element: <Particles />
  },
  //   ]
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/Login",
  //   element: <Login />,
  // },
]);


function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />

    </div>
  );
}
export default App;
