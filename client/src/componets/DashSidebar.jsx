import React from 'react'
import "flowbite-react"
import { Sidebar } from 'flowbite-react'
import {HiArrowSmRight, HiUser} from "react-icons/hi"
import { useEffect,useState } from 'react'
import  {Link, useLocation} from "react-router-dom"

export default function DashSidebar() {
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
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link  to="/dashboard?tab=profile">
                <Sidebar.Item active={tab=== "profile"} icon={HiUser} label={"User"} labelColor="dark"
                as="div">
                    Profile
                </Sidebar.Item>
                </Link>
                <Sidebar.Item  icon={HiArrowSmRight} className="cursor-pointer">
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
