import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { clearTeam } from '../Utils/teamSlice';


const TeamFilter = () => {

    const teamMembers = useSelector(store =>store.team.members);

    const dispatch = useDispatch();

    const handleClearTeam = ()=>{
        dispatch((clearTeam()))
    }


  return (
    <div className='w-60 '>
      
      <div className='p-3'>
        <Link to="/Team"><button className='bg-slate-400 px-3 py-5 w-48 h-10 rounded-md font-medium flex justify-between  items-center text-lg hover:shadow-2xl hover:bg-slate-500' ><span className=''>Team</span><span>{teamMembers.length}</span> <span className=''>^</span></button></Link>
        <div className='m-5'>
            <div><button className='bg-slate-400 px-3 py-5 w-40 h-10 m-2 rounded-md font-medium flex justify-between  items-center text-lg hover:shadow-2xl hover:bg-slate-500' onClick={()=>handleClearTeam()}>Clear Team</button></div>
            <Link to="/"><div><button className='bg-slate-400 px-3 py-5 w-40 h-10 m-2 rounded-md font-medium flex justify-between  items-center text-lg hover:shadow-2xl hover:bg-slate-500'>Add Members</button></div></Link>
            <div><button className='bg-slate-400 px-3 py-5 w-40 h-10 m-2 rounded-md font-medium flex justify-between  items-center text-lg hover:shadow-2xl hover:bg-slate-500'>Filter Members</button></div>
        </div>  
      </div>
      
    </div>
  )
}

export default TeamFilter