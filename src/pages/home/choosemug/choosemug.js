import SingleMug from "./singlemug";
import mug1 from '../../../assets/images/mug1.jpg'
import mug2 from '../../../assets/images/mug2.jpg'
import mug3 from '../../../assets/images/mug3.jpg'
import mug4 from '../../../assets/images/mug4.jpg'
import mug5 from '../../../assets/images/mug5.jpg'
import mug6 from '../../../assets/images/mug6.jpg'

const ChooseMug = () => {
    const mugData = [
        {
            id :1,
            name : 'Stoneware Coffee Mug ',
           
            icon : mug1,
           
        },
        {
            id :2,
            name : 'Glass Coffee Mug',
            
            icon : mug2,
           
        },
        {
            id :3,
            name : 'Stainless Steel Mug',
           
            icon : mug3
          
        },
        {
            id :4,
            name : 'CeraMic Coffee Mug',
            
            icon : mug4
          
        },
        {
            id :5,
            name : 'Benki Sustainable Coffee Mug',
          
            icon : mug5
          
        },
        {
            id :6,
            name : 'Paper Coffee Mug',
          
            icon : mug6
          
        },
    ]
    return (
       <section className="mt-16">
         <div className="divider mt-32 mb-8 text-secondary text-4xl font-bold heading">MUG SECTION</div>
          <div>
     <h2 className="text-xl text-accent text-center font-bold para-link">YOU CAN CHOOSE YOUR MUG</h2>
         
         <h3 className="text-3xl text-center para-link">MUG WE PROVIDE</h3>
          </div>
 
          
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16'>
     {
       mugData.map( service => <SingleMug
        key={service.id}
        service = {service}
        
        ></SingleMug>)
     }
        </div>

       
       </section>
    )
 }
 export default ChooseMug;