import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.js';
import { RouterProvider, createBrowserRouter   } from 'react-router-dom';
// import Signup from './components/index.js';
// import Login from './components/index.js';
// import { AuthLayout } from './components/index.js'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//         // {
//         //     path: "/",
//         //     element: <Home />,
//         // },
//         {
//             path: "/login",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Login />
//                 </AuthLayout>
//             ),
//         },
//         {
//             path: "/signup",
//             element: (
//                 <AuthLayout authentication={false}>
//                     <Signup />
//                 </AuthLayout>
//             ),
//         },
        
//     ],
// },
// ])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <RouterProvider router={router}/> */}
      <App />
    </Provider>
  </React.StrictMode>,
)
