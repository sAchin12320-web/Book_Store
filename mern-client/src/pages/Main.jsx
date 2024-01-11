import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import FooterBanner from '../components/FooterBanner'
import MyFooter from '../components/MyFooter'

const Main = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
      <Outlet/>
    </div>
    {/* <FooterBanner /> */}
    <MyFooter/>
    </>
  )
}

export default Main
