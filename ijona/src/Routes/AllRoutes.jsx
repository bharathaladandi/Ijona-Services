import React from 'react';
import{ Route, Routes } from 'react-router-dom'
import { HomaPage } from '../Pages/HomaPage';
import { Ragister } from '../Pages/Ragister';
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/homepage' element={<HomaPage />}></Route>
            <Route path='/' element={<Ragister />}></Route>
        </Routes>
    </div>
  )
}
