
import { Link } from 'react-router-dom';
import table1 from '../../assets/images/table1.jpg';
import table2 from '../../assets/images/table2.jpg';
import table3 from '../../assets/images/table3.jpg';
import table4 from '../../assets/images/table4.jpg';
import table5 from '../../assets/images/table5.jpg';
import table6 from '../../assets/images/table6.jpg';
import SingleTable from './singleTable';


const BookTable = () => {
    const tableData = [
        {
            id :1,
            name : 'Marble Top Table ',
        
           
            icon : table1,
           
        },
        {
            id :2,
            name : 'Stool Coffee Table',
            
            icon : table2,
           
        },
        {
            id :3,
            name : 'Zerno Coffee Table',
           
            icon : table3         
        },
        {
            id :4,
            name : 'Verona Coffee Table',
            
            icon : table4
          
        },
        {
            id :5,
            name : 'Los Angeles Table',
            
            icon : table5
          
        }
    ]
    const handlePlaceOrder = event => {
      event.preventDefault();
      const form = event.target;
      // const customerName = `${form.firstName.value} ${form.lastName.value}`
      // const email = user?.email || 'unregistered';
      const person = form.person.value;
      const tablename = form.tablename.value;
      const email = form.email.value;
      const name = form.name.value

      const order = {
          // service:_id,
          // servicename:name,
          // price:price,
          // customer:customerName,
           email,
           name,
           person,tablename
         
      }
      fetch('http://localhost:5000/orders',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
      body:JSON.stringify(order)

      })
      .then( res => res.json())
      .then( data => console.log(data))

  }
  
    return (
        <section className="mt-16 mb-16">
       
   
         
       <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-16 gap-2'>
    {
      tableData.map( service => <SingleTable
       key={service.id}
       service = {service}
       
       ></SingleTable>)
    }
       </div>

       <div className="hero mt-16">
  <div className="hero-content flex-col lg:flex-row-reverse mr-32">
    <div style={{
        height:400,
        width:400
    }} className="text-center lg:text-left bg-secondary rounded-lg ">
    <img className='p-10' src={table6} alt="" />
    <h1 className='text-2xl font-bold text-white ml-10 para-link'>Book Your <br /> Desire Table</h1>
    <Link className='text-primary font-bold ml-10 para-link' to='/'>
  Back Home</Link>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white mr-32">
       <form onSubmit={handlePlaceOrder} className="card-body">
        <div className="form-control">
         
          <input type="text" placeholder="name" name='name' className="input  bg-secondary  input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="text" placeholder="email" name='email' className="input bg-secondary input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="text" placeholder="table name" name='tablename' className="input  bg-secondary input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" placeholder="person" name='person' className="input  bg-secondary  input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </section>
      
    )
}
export default BookTable