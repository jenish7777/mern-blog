import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import DashSidebar from "../componets/DashSidebar"
import DashProfile from "../componets/DashProfile"
import DashPost from "../componets/DashPost"
import DashUsers from '../componets/DashUsers'
import DashComments from '../componets/DashComments'
import DashboardComp from '../componets/DashboardComp'
export default function Dashboard() {
  const location=useLocation()
  const [tab,setTab]=useState("")
  useEffect(()=>{
    const urlParms=new URLSearchParams(location.search)
    const tabFromUrl=urlParms.get("tab")
    if(tabFromUrl){
      setTab(tabFromUrl)
    }

  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        {/*Sidebar*/}
        <DashSidebar/>
      </div>
       {/*Profile*/}
       {tab==="profile" &&      <DashProfile/> }
       {/*posts...*/}
       {tab==="posts" && <DashPost/>}
       {/*users...*/}
       {tab==="users" && <DashUsers/>}
       {/*Comments */}
       {tab==="comments" && <DashComments/>}
       {/* dashboard comp */}
       {tab === "dash" && <DashboardComp/>}
    </div>
  )
}
