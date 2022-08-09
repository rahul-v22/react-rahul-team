import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import Userdata from './components/userdata';



function AppRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app' element={<App/>}/>
                <Route path='/userdata' element={<Userdata/>}/>
                
                

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;