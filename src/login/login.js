
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authprovider";
import SocialLogIn from "../shared/socialLogin/socialLogin";


const LogIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
  
    const {signIn} = useContext(AuthContext);
   const handleLogIn = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
       const password =form.password.value;
      signIn(email,password)
      .then( result => {
          const user = result.user;
          console.log(user);
          const currentUser = {
            email : user.email
          }
          console.log(currentUser);
          // fetch(`http://localhost:5000/jwt`,{
          //   method:'POST',
          //   headers:{
          //     'content-tpye' : 'application/json'
          //   },
          //   body:JSON.stringify(currentUser)
          //   .then(res => res.json())
          //   .then( data => {
          //     localStorage.setItem('genius-token',data.token);
              navigate( from,{ replace : true});
            })
         // })
        
     // })
      form.reset();
  
    }
      return (
          <div>
             
         <div className="hero my-20 mx-auto w-4/5 ">
    <div className="hero-content flex-col lg:flex-row">
    <img style={{
        height:400,
        width:400,borderRadius:30,
        borderBlockColor:'brown'
    }} className="mx-auto" src="https://i.ibb.co/JdjRXFB/TF-cold-mango-coffee-141.jpg " alt="" />
      <div className="text-center lg:text-left mr-20  ">
       
    
      </div>
      <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base ">
        <form onSubmit={handleLogIn} className="card-body">
        <h1 className="text-5xl font-bold text-center text-white para-link">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary para-link">Email</span>
            </label>
            <input  type="email" placeholder="email" name='email' className="input input-bordered font-bold bg-secondary" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-primary para-link">Password</span>
            </label>
            <input  type="password" placeholder="password" required name='password' className="input input-bordered bg-secondary font-bold" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover  text-primary para-link">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
           <button className='btn btn-outline btn-secondary'>LogIn</button>
          </div>
        </form>
        <p className='text-center text-primary para-link'>New in COFFEE SHOP? 
          <Link to='/signup'>
          SignUp</Link>
  
        </p>
        <SocialLogIn></SocialLogIn>
      </div>
    </div>
  </div>
          </div>
      )
  }
  export default LogIn;