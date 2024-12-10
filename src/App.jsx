import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './routes/Home/Home'
import { LogIn } from './routes/Login/LogIn'
import { Registration } from './routes/Registration/Registration'
import { Tovari } from './routes/Tovari/Tovari'
import { Profile } from "./routes/Profile/Profile"
import { Cart } from "./routes/Cart/Cart"
import { TovarDetails } from "./components/TovarDetails/TovarDetails"
import s from "./App.module.css"

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/tovari',
    element: <Tovari />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/Cart',
    element: <Cart />
  },
  {
    path: '/tovar/:id',
    element: <TovarDetails />
  }
])

export function App() {
  return <RouterProvider router={router} />
};

