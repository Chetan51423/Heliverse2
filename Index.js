import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/Components/Header'
import Body from './src/Components/Body'
import Footer from './src/Components/Footer'
import { useContext } from 'react'
// import userContext from '../Utils/UserContext'
import UsersData from './heliverse_mock_data.json'
import { Provider } from 'react-redux'
import store from './src/Utils/store'
import Team from './src/Components/Team'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'



const App = ()=>
{
    const [user,SetUserData] = useState(UsersData);
    return (
        <Provider store={store}>
            {/* <userContext.Provider value={{UsersData:user,SetUserData:SetUserData}}> */}
            
                <div className='flex flex-col items-center justify-center'>
                    <Header/>
 
                    <Outlet/>
                    
                    <Footer/>
                </div>
            {/* </userContext.Provider> */}
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/Team",
                element:<Team/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)