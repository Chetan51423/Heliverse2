import React from 'react'
import { addMember } from '../Utils/teamSlice'
import { useDispatch } from 'react-redux'


const UserCard = (user) => {
//{id,first_name, last_name,email, gender,avatar,domain, available}

    const dispatch = useDispatch();

    const handleAddMember = (user)=>{
        dispatch(addMember(user))
    }

  return (
    <div>
        {console.log()}
        <div className="h-96 w-72 m-6 p-5 flex flex-col justify-around items-start bg-slate-200 shadow-md hover:shadow-2xl">
            <div className='avtar h-52 w-60 bg-slate-400 mx-auto rounded-md mb-3'>
                <img src={user.avatar} alt="" />
            </div>
            
            <div className='font-semibold text-base w-60'>
                <div>{user.id}</div>
                <div className=''>
                    <h1>Name: {user.first_name}{"  "}{user.last_name}</h1>
                </div>
                <div>
                    <h2>Domain: {user.domain}</h2>
                </div>
                
               <div className=' '>
                    <div>
                        <h2>Gender:{user.gender}</h2>
                    </div>
                   <div className='flex flex-row justify-between mx-auto'>
                        {user.available ? (
                                <button className='bg-violet-400 hover:bg-violet-500 rounded-lg px-2 py-1 mt-3' onClick={()=>handleAddMember(user)}>Add in Team</button>
                            ) : (
                                <button className='bg-red-300 rounded-lg px-2 py-1 mt-3' disabled>Not available</button>
                        )}    
                    </div>
               </div>
                
                
            </div>
            {/* <div className='flex flex-col mt-auto'>
                    <div>
                        {
                            gender==="Male"?(<img  className='w-10 h-10 mb-0'  src={manImage} alt="" />
                            ):(<img  className='w-10 h-10 mb-0'  src={womenImage} alt="" />)
                        }
                        
                    </div>
            </div> */}
            
            
        </div>
    </div>
  )
}

export default UserCard

// {"id":1,"first_name":"Anet","last_name":"Doe","email":"adoe0@comcast.net","gender":"Female","avatar":"https://robohash.org/sintessequaerat.png?size=50x50&set=set1","domain":"Sales","available":false},