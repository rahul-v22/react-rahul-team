import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Usersdata from './components/Usersdata/Usersdata';

import TableAxios from "./Venkateswarlu/tableRender_axois"

import Userdata from './components/userdata';




function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="venkteswarlu/tableaxios" element={<TableAxios></TableAxios>}/>
                <Route path='/userdata' element={<Userdata/>}/>
                <Route path='/usersdata' element={<Usersdata/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;