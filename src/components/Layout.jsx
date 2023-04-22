import React from 'react';
import { Navbar } from './Navbar.jsx';

export const Layout = ({children}) => {
  return (
    <>
    <div className='container mx-auto'>
        <Navbar/>
        {children}
    </div>
    </>
  )
}
