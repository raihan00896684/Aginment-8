import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './Root/Root.jsx'
import Home from './Home/Home.jsx'
import BookDeatails from './BooksDeatails/BooksDeatails.jsx'

const route = createBrowserRouter([{
  path:'/',
  element:<Root></Root>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'/BookDeatails',
      element:<BookDeatails></BookDeatails>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
