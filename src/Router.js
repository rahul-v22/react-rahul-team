import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';



function AppRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app' element={<App/>}/>
                
                

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;