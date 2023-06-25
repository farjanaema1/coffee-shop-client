import coffee from '../../../assets/images/bigcoffee.png'
import blackcoffee1 from '../../../assets/images/coffee5.jpg';
import blackcoffee2 from '../../../assets/images/coffee6.jpg';
import blackcoffee3 from '../../../assets/images/coffee2.jpg';
import blackcoffee4 from '../../../assets/images/coffee4.jpg';
const AnotherBanner = () => {
    return (
        <div>
<div className="flex w-full">
  <div className="grid  flex-grow card bg-base rounded-box place-items-center">
  <div style={{
    width:400,
    height:400
  }} className="carousel ">
  <div id="slide1" className="carousel-item relative w-full">
    <img style={{
      borderRadius:50
    }} src={blackcoffee1}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img style={{
      borderRadius:50
    }} src={blackcoffee2}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img style={{
      borderRadius:50
    }} src={blackcoffee3}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img style={{
      borderRadius:50
    }} src={blackcoffee4}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   
  </div>
  
  <div className="grid  flex-grow card bg-base rounded-box place-items-center">
    <img src={coffee} alt="" />
  </div>
  
  <div className="grid  flex-grow card bg-base rounded-box place-items-center">

  <h1 className='text-2xl font-bold text-white heading'>Fresh roasted coffee <br /> with 24h delivery</h1>
    <p className='para-link'>Lorem ipsum dolor, sit amet consectetur
        <br /> adipisicing elit. Aliquid nulla est, <br />
         cumque exercitationem quaerat dolore <br /> laborum iusto hic quae reiciendis sit <br /> dolores aspernatur, voluptatibus <br />
         ipsa fugiat doloribus necessitatibus! <br /> Impedit, maxime?</p>
  </div>
</div>
        </div>
    )
}
export default AnotherBanner