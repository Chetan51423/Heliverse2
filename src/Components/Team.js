import { useState } from 'react';
import { useSelector } from 'react-redux';
import TeamFilter from './TeamFilter';
import UserCard from './UserCard'
import TeamMemberCard from './TeamMemberCard'
import {Link} from 'react-router-dom'
// import store from '../Utils/store';


const Team = () => {
    
    const teamMembers = useSelector(store =>store.team.members);
    // const [inTeam, SetInTeam] = useState(True);
  return (
    
    <div className='flex flex-row  min-w-full items-center'>
      {
          console.log("teamMembers:->"+teamMembers.length)
      }
      <div className='className=flex flex-row mt-28 mb-20 min-w-full justify-between'>
        <div className='mt-10 max-w-60 h-3/4 mb-28 fixed ml-0 bg-slate-200 rounded-md'>
          <TeamFilter/>
        </div>
        <div>
        {
          teamMembers.length==0 ?(
              <div className='m-7 p-10 ml-64 w-3/4 flex flex-col  items-center justify-center'>
                  <div className='bg-red-300 m-16 p-7 rounded-md mt-0 ml-0'>
                      <h1 className='text-3xl text-black font-normal'>To Create Team Please Add Team Members</h1>
                      
                  </div>
                  <div className='m-3 p-7 '>
                  <Link to="/"><button className='bg-violet-400 hover:bg-violet-500 px-5 py-4 rounded-md font-medium' >Add Members</button></Link>
                  </div>
              </div>
          ):(
            <div className='m-7 p-10 ml-64 w-3/4 flex flex-row flex-wrap items-center justify-center'>
              {teamMembers.map((user)=>{
                return (
                  <div className='flex flex-col'>
                    <TeamMemberCard key={user.id} {...user} />
                  </div>
                    
                ) 
              })}
            </div>
          )
        }
        </div>
        
        
      </div>
      
      
    </div>
  )
}

export default Team
