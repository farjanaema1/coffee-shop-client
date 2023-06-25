import { Link } from "react-router-dom";
import coffeeshop from '../../assets/images/COFFEE SHOP.png'
import { AuthContext } from "../../context/authprovider";
import { useContext } from "react";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
      .then( () => {})
    }
    
   
    const menuItems = <>
    <li><Link className="text-success" to='/'>Home</Link></li>
   
    <li><Link className="text-success"  to='/about'>About</Link></li>
    {/* <li><Link to='/review'>Review</Link></li> */}
    {/* <li><Link className="text-success"  to='/login'>Login</Link></li>  */}
    <li><Link className="text-success"  to='/managetable'>ManageTable</Link></li> 
    <li><Link className="text-success"  to='/gallery'>Gallery</Link></li> 
    {
      user?.email?
      <>
       <li><Link className="text-success"  to='/orders'>Orders</Link></li>
      
      <Link>
        <button className="btn btn-success" onClick={handleLogOut}>SignOut</button>
      </Link>
      </>
      :
      <Link to='/login'>
         <button className="btn btn-success">LogIn</button>
      </Link>
    }
    
  
   
     
     </>
    return (
        <div>

     
          <div>
   <div className="navbar bg-base-100 flex justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={1} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {
          menuItems
         }
        </ul>
      </div>
      {/* <Link style={{
        
      }} className="btn btn-ghost text-ghost  normal-case text-xl">CoffeeShop</Link> */}
     <Link to='/'>
     <img style={{
        height:45,
        width:80,borderRadius:50
      }} src={coffeeshop} alt="" /></Link>
      <Link className="text-success font-bold ml-2" to='/'>COFFEESHOP</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {menuItems}
      </ul>
    </div>
    <div className="navbar-end">
    
    </div>
  </div>
  <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
  
          </div>
        </div>
    )
}
export default Navbar;