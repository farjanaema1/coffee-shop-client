
import bg from '../../../assets/images/brewedcoffee.png';
import small from '../../../assets/images/blackcoffee.png';
const Subscribe = () => {
    return (
        <div> 
            {/* <img style={{
              height:300,
               width:1500
            }} src={bg} alt="" />
            <div className='absolute top-2/3'>
                <h1 className='text-white'>Coffee Shop</h1>
            </div> */}
           

           <div className="hero bg-base">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img style={{height:300}} src={bg}className="ml-32" />
    <img src={small} alt="" />
    <div className='mr-32'>
      <h1 className=" text-white font-bold heading">CoffeeShop</h1>
     <h1 className='text-white font-bold text-3xl para-link'>Subscribe newsletter and <br /> <span className='text-primary para-link'>get -20% off</span></h1>
      <p className='text-white mt-2 para-link'>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.  Lorem Ipsum has <br /> been the industry's standard dummy.</p>
      <br />
      <input type="email" placeholder="Type your email address" className="input  bg-white  w-full max-w-xs" required />
      <button className="btn btn-primary mt-2 font-link">Subscribe</button>
    </div>
  </div>
</div>
       </div>

        
    )
}
export default Subscribe;