import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Usersdata from './Components/Usersdata/Usersdata';



function AppRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/usersdata' element={<Usersdata/>}/>
                
                

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;