import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import TableAxios from "./Venkateswarlu/tableRender_axois"



function AppRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app' element={<App/>}/>
                <Route path="venkteswarlu/tableaxios" element={<TableAxios></TableAxios>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;