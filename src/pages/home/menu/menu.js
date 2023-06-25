
import menu1 from '../../../assets/images/menu1.jpg';
 import menu2 from '../../../assets/images/menu2.jpg';
import menu3 from '../../../assets/images/menu3.jpg';

import menu4 from '../../../assets/images/menu4.jpeg'
import menu5 from '../../../assets/images/menu5.jpg';
import menu6 from '../../../assets/images/menu6.jpg';
const Menu = () => {
    return (
        <div className='mt-8 mb-8'>
            <h1 className='font-bold text-3xl text-primary mb-6 heading'>
                Check Our Menu
            </h1>
   <div className="grid grid-cols-6 gap-2">
    <img style={{
        height:250,
        width:250
    }} src={menu1} alt="" />
    <img style={{
        height:250,
        width:250
    }} src={menu2} alt="" />
    <img style={{
        height:250,
        width:250
    }} src={menu3} alt="" />
    <img style={{
        height:250,
        width:250
    }} src={menu4} alt="" />
    <img style={{
        height:250,
        width:250
    }} src={menu5} alt="" />
    <img style={{
        height:250,
        width:250
    }} src={menu6} alt="" />

   </div>
        </div>
    )
}
export default Menu;