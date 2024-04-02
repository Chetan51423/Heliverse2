// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="fixed top-0 w-full flex justify-center mb6 bg-slate-500">
      <div className="h-24 mb-3 items-center justify-center flex ">
        <div>Header</div>
        {/* <div className="flex">
            <ul className="flex">
                <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/">Home</Link></li>
                <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/About">About</Link></li>
                <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/Contct_Us">Contct_Us</Link></li>
                <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/Instamart">Instamart</Link></li>
                <li className="lg:text-xl sm:text-sm p-3 font-semibold hover:bg-orange-300 rounded-3xl"><Link to="/Cart">Cart</Link></li>
            </ul>
            
        </div> */}
      </div>
    </div>
  )
}

export default Header
