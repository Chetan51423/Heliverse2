import React, { useState,useContext } from 'react'
import UsersData from '../../heliverse_mock_data.json'
import UsersData2 from '../../heliverse_mock_data.json'

import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Filter = () => {
    const [filter, SetFIlter]= useState(false);
    const [gender, SetGender]= useState(false);
    const [domain, SetDomain]= useState(false);
    const [availability, SetAvailability]= useState(false)

    const [genderValue, SetGenderValue] = useState("");
    const [domainValue, SetdomainValue] = useState("");
    const [availabilityValue, SetAvailabilityValue] = useState("");

    // const {UsersData,SetUserData} = useContext(userContext)
    const [filterUsers,SetFilterUsers] = useState(UsersData2);
    
    const teamMembers = useSelector(store =>store.team.members);

    const handleGenderChange = (event)=>{
        SetGenderValue(event.target.value);
    }
    const handleDomainChange = (event)=>{
        SetdomainValue(event.target.value);
    }
    const handleAvailabilityChange = (event)=>{
        SetAvailabilityValue(event.target.value);
    }

    function filterUser(genderValue,domainValue,availabilityValue){
        return (
            UsersData.filter((user)=>user.gender.includes(genderValue) )
        )
    }
    
  return (
    <div className='w-60 '>
      <div className='p-3'>
        <button className='bg-slate-400 px-3 py-5 w-48 h-10 rounded-md font-medium flex justify-between  items-center text-lg hover:shadow-2xl hover:bg-slate-500' onClick={()=>{filter?SetFIlter(false):SetFIlter(true)}}><span className=''>Filter</span> <span className=''>^</span></button>
        {/* {console.log("FilterUser:->"+filterUsers.length)} */}
        {/* {console.log("teamMembers:->"+teamMembers.length)} */}
        {filter?(
            <div className='m-2'>
                <button className='bg-slate-400 px-3 py-5 w-32 flex justify-between items-center h-10 m-3 rounded-md hover:bg-slate-500'onClick={()=>{gender && filter?SetGender(false):SetGender(true)}}>
                    <span className=''>Gender</span> <span className=''>^</span>
                </button>
                <button className='bg-slate-400 px-3 py-5 w-32 flex justify-between items-center h-10 m-3 rounded-md hover:bg-slate-500' onClick={()=>{domain && filter?SetDomain(false):SetDomain(true)}}><span className=''>Domain</span> <span className=''>^</span></button>
                <button className='bg-slate-400 px-3 py-5 w-32 flex justify-between items-center h-10 m-3 rounded-md hover:bg-slate-500' onClick={()=>{availability && filter?SetAvailability(false):SetAvailability(true)}}><span className=''>Availability</span> <span className=''>^</span></button>
                <div className='flex ml-7 items-center'>
                    {
                        genderValue.length>0 || domainValue.length>0 || availabilityValue.length>0 ? (
                            <div className='m-2'>
                                <button className='bg-purple-400 rounded-lg px-2 py-1 font-medium hover:bg-purple-600 hover:shadow-2xl' onClick={()=>{
                                    SetFilterUsers(filterUser(genderValue,domainValue,availabilityValue))
                                    SetUserData(filterUser(genderValue,domainValue,availabilityValue))
                                }}>Apply</button>
                            </div>
                            
                        ):(null)
                    }
                </div>
            </div>
            
        ):(null)}
    
        
        {
            gender?(
                <div className='m-0 p-1 bg-violet-200 flex flex-row flex-wrap items-end rounded-md'>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Male</label> <input type="radio" name="gender" value="Male" onChange={handleGenderChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Female</label> <input type="radio" name="gender" value="Female" onChange={handleGenderChange} /></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Bigender</label> <input type="radio" name="gender" value="Bigender" onChange={handleGenderChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Agender</label> <input type="radio" name="gender" value="Agender" onChange={handleGenderChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Polygender</label> <input type="radio" name="gender" value="Polygender" onChange={handleGenderChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Non-Binary</label> <input type="radio" name="gender" value="Non-Binary" onChange={handleGenderChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Genderfluid</label> <input type="radio" name="gender" value="Genderfluid" onChange={handleGenderChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Genderqueer</label> <input type="radio" name="gender" value="Genderqueer" onChange={handleGenderChange}/></div>
                </div>
            ):("")
        }
        {
            domain?(
                <div className='mt-3 p-1 bg-violet-200 flex flex-row flex-wrap items-end rounded-md'>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Sales</label> <input type="radio" name="domain" value="Sales" onChange={handleDomainChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Management</label> <input type="radio" name="domain" value="Management" onChange={handleDomainChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Marketing</label> <input type="radio" name="domain" value="Marketing"onChange={handleDomainChange} /></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Finance</label> <input type="radio" name="domain" value="Finance"onChange={handleDomainChange} /></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">IT Management</label> <input type="radio" name="domain" value="IT Management" onChange={handleDomainChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Business Development</label> <input type="radio" name="domain" value="Business Development" onChange={handleDomainChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">UI Designing</label> <input type="radio" name="domain" value="UI Designing" onChange={handleDomainChange}/></div>
                    
                    
                </div>
            ):("")
        }
        {
            availability?(
                <div className='mt-3 p-1 bg-violet-200 flex flex-row flex-wrap items-end rounded-md'>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Available</label> <input type="radio" name="availability" value={true} onChange={handleAvailabilityChange}/></div>
                    <div className='bg-slate-400 px-1 py-1 w-24 flex justify-between items-center text-xs m-1 rounded-md hover:bg-slate-500'><label htmlFor="">Unavailable</label> <input type="radio" name="availability" value={false} onChange={handleAvailabilityChange}/></div>
                    
                </div>
            ):("")
        }
        
        
      </div>
      <div className='p-3'>
        <Link to="/Team"><button className='bg-slate-400 px-3 py-5 w-48 h-10 rounded-md font-medium flex justify-between  items-center text-lg hover:shadow-2xl hover:bg-slate-500'><span className=''>Team</span><span>{teamMembers.length}</span> <span className=''>^</span></button></Link>
        {/* <Team/> */}
        
      </div>
      
    </div>
  )
}

export default Filter
