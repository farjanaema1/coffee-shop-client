import { Link } from 'react-router-dom';
import blackcoffee from '../../../assets/images/blackcoffee.png';
import brewedcoffee from '../../../assets/images/brewedcoffee.png'

const Service = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
<div className="grid flex-grow p-10 card bg-base rounded-box place-items-center">
    <h1 className="text-white heading">CoffeeStore</h1>
    <h1 className="text-2xl font-bold text-primary para-link">
    Fresh roasted coffee <br /> with 24h delivery
    </h1>
   <p className='para-link'>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. Lorem Ipsum has been <br /> the industry's standard dummy.</p>
</div>
<div className="divider lg:divider-horizontal"></div> 
<div className="grid flex-grow p-10 card bg-base rounded-box place-items-center">
<h1 className="text-white text-xl para-link">Choose the origin of the coffee:</h1>
    <h1 className="text-2xl font-bold text-primary font-link">
    Spain <br />
Ukraine <br />
India <br />
United Kingdom <br />
Poland <br />
    </h1>
</div>
<div className="divider lg:divider-horizontal"></div> 
<div className="grid flex-grow p-10 card   place-items-center">
<div className="card card-side bg-black shadow-xl">
  <figure><img src={blackcoffee} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title para-link">Cafe au Lait is released</h2>
    <p className='para-link'>Click the button to watch more</p>
   <Link to='/about'>
   <button className='btn btn-accent para-link'>See More</button>
  </Link>
  </div>
</div>
<div className="card card-side bg-black shadow-xl mt-2">
  <figure><img src={brewedcoffee} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title para-link">Brewed Coffee is released!</h2>
    <p className='para-link'>Click the button to watch on table.</p>
    <Link to='/booktable'>
   <button className='btn btn-accent para-link'>See Table</button>
  </Link>
    
  </div>
</div>
</div>
        </div>
    )
}
export default Service;