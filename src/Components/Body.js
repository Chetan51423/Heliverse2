import { useState,useContext } from 'react';
import UsersData2 from '../../heliverse_mock_data.json'
import UserCard from './UserCard'
import Filter from './Filter'
import UsersData from '../../heliverse_mock_data.json'


const Body = () => {

  // const {UsersData,SetUserData} = useContext(userContext)
    
  // const [Users,SetUsers] = useState(UsersData);
  const [searchInput, SetSearchInput] = useState("");
  const [serchUser , SetSerchUser] = useState(false);
  
  //pagination

  const userPerPage = 20;
  const [currentPage, SetCurrentPage] = useState(1);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const [currentUsers, SetCurrentUsers] = useState(UsersData.slice(indexOfFirstUser,indexOfLastUser));

  const paginate = (pageNumber)=>SetCurrentPage(pageNumber);
  const nextPage = () => SetCurrentPage(currentPage+1);
  const prevPage = () => SetCurrentPage(currentPage-1); 
  

  function filterData(serchInput, UData)
  {
    return UData.filter((user)=>user.first_name.includes(serchInput))
    
  }
  
  return (
    <div className='flex flex-row mt-28 mb-20 min-w-full'>
      <div className='mt-10 max-w-60 h-3/4 mb-28 fixed ml-0 bg-slate-200 rounded-md'>
        <Filter/>
      </div>
      
      {console.log(UsersData)}
      <div className='m-7  ml-64 w-3/4 flex flex-col items-center justify-center'>
        <div className=' w-full p-3 bg-slate-400 m-3 h-16 flex items-center justify-center shadow-2xl rounded'>
            <input type="search" placeholder='search' value={searchInput} className='p-1 w-72 rounded-md bg-slate-50 hover:bg-slate-100 font-semibold ' 
              onChange={(e)=>{
                // SetUserData({UsersData:e.target.value})
                SetSearchInput(e.target.value)
              }}
            />
            <button  className="m-2 px-3 py-1 bg-purple-500 hover:bg-purple-700 font-medium rounded-xl shadow hover:shadow-2xl"
            onClick={()=>{
              SetSerchUser(true)
              searchInput===""?SetCurrentUsers(UsersData2.slice(indexOfFirstUser,indexOfLastUser)):
              SetUserData(filterData(searchInput,UsersData))
              
              SetCurrentUsers(filterData(searchInput,UsersData))
              // {console.log(UsersData)}
              
            }}>Search</button>
          </div>
          <div className='m-5 flex flex-row flex-wrap justify-around'>
            {
              
              currentUsers.map((user)=>{
                
                return (
                  <div className='flex flex-col'>
                    <UserCard key={user.id} {...user}/>
                  </div>
                    
                ) 
              })
            }
          </div>
          <div className='flex flex-row w-full justify-between m-6'>
            <button disabled={currentPage===1} className='bg-black text-white px-5 py-3 rounded-lg' onClick={prevPage}>Previous</button>
            <button disabled={indexOfLastUser >= UsersData.length} className='bg-black text-white px-5 py-3 rounded-lg' onClick={nextPage}>Next</button>

          </div>
        <div/>
    </div>

    </div>
    
  )
}

export default Body

