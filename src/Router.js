import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Usersdata from './Components/Usersdata/Usersdata';
import TableAxios from "./Venkateswarlu/tableRender_axois"
import Userdata from './Components/userdata';
import Displaying_text from './Components/usestate_practice/Displaying_text';
import Conditional_render from './Components/usestate_practice/Conditional_render';
import Timer from './Components/usestate_practice/Timer';
import Pagination_active from './Components/usestate_practice/Pagination_active';
import Show_hide from './Components/usestate_practice/Show_hide';





function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="venkteswarlu/tableaxios" element={<TableAxios></TableAxios>}/>
                <Route path='/userdata' element={<Userdata/>}/>
                <Route path='/usersdata' element={<Usersdata/>}/>
                <Route path='/displaytext' element={<Displaying_text/>}/>
                <Route path='/conditionalrender' element={<Conditional_render/>}/>
                <Route path='/timer' element={<Timer/>}/>
                <Route path='/dropdown' element={< Pagination_active/>}/>
                <Route path='/show_hide' element={< Show_hide/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;