import { Link } from 'react-router-dom';
import banner from '../../../assets/images/coffee7.jpg';
const Banner = () => {
    return (
        <section className='mb-16' style={ { background : `url( ${banner})`,
        height:700
        
        
        }}>
            <div className='text-white '>
                <h2 className='text-xl absolute top-1/2 ml-32 text-primary heading '>Coffeshop</h2> <br />
                <h2 className='font-bold text-4xl absolute top-1/2 mt-6 ml-32 font-link'>Freshly roasted  Coffee and barista <br />accessories</h2>
                <p className='absolute top-2/3 ml-32 para-link'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rerum ullam <br /> illum laborum vero aliquam, facilis placeat amet consequuntur <br /> quas praesentium alias quos totam magnam ut ratione <br /> laudantium modi dicta.</p> <br />

                <Link to='/booktable' className='absolute bottom-0'>
                <button className="btn btn-accent">Book a table</button>
                </Link>
            </div>
        </section>
    )
}
export default Banner;