
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authprovider";

const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        createUser(email,password)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        form.reset();

      }
    return (
        <div>
            
              <div className="hero  my-20 mx-auto w-4/5 ">
  <div className="hero-content flex-col lg:flex-row">
  <img style={{
    borderRadius:50
  }} src="https://i.ibb.co/0CSZXhJ/cold-Coffee.jpg" alt="" />
 
    <div className="text-center lg:text-left mr-20  ">
        
     
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-5xl text-white font-bold text-center font-link">SignUp</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-primary heading font-bold">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered bg-accent" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-primary heading font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered bg-accent" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-primary heading font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" required name='password' className="input input-bordered bg-accent" />
         
        </div>
        <div className="form-control mt-6">
         <button className='btn btn-outline btn-primary'>SignUp</button>
        </div>
      </form>
      <p className='text-center text-accent para-link'>Already have an accout?
        <Link to='/login'>
          <button className="btn btn-sm btn-ghost">SignIn</button>
        </Link>
      </p>
    </div>
  </div>
</div>
        </div>
    )
}
export default Signup;