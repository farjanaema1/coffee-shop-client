import { useQuery } from "react-query";
import coffee from '../../assets/images/bigcoffee.png'

const ManageTables = () => {
    const {data: orders,isLoading,refetch} = useQuery({
      queryKey:['doctors'],
      queryFn : async() => {
          try{
              const res = await fetch('http://localhost:5000/orders',{
                  headers:{
                      'content-type':'application/json'
                     
                  }
              });
              const data = await res.json();
              return data 
          }
          catch(error){

          }

      }
  })
   
   
    // const handleDeleteDoctor = id => {
    //   //console.log(doctor);
    //   fetch(`http://localhost:5000/doctors/${id}`,{
    //     method:'DELETE',
    // headers:{
    //   'content-type':'application/json'
    // }
    //   })
    //   .then(res => res.json())
    //   .then( data => {
    //     console.log(data)
    //     refetch();
    //   })

    // }
//   if(isLoading) {
//       <Loading></Loading>
//   }
  return (
      <div>
<h2 className="text-2xl font-bold text-accent mb-16">Total Booking Table :{orders?.length}</h2>
<div className="w-4/5 bg-secondary p-10 mx-auto flex">
<table className="table ml-10 mr-10 ">
 
  <thead>
  <tr>
        <th></th>
        <th className="text-primary">Name</th>
        <th className="text-primary">Email</th>
        <th className="text-primary">Table Name</th>
        <th className="text-primary">Person</th>
      </tr>
  </thead>
  <tbody>
    
  {
      orders?.map( (order,i) => <tr
  
      >
          <th>
           {i+1}
          </th>
          <td>
            <div className="flex items-center space-x-3">
              {/* <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={order.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div> */}
              <div>
                <div className="font-bold text-success">{order.name}</div>
              
              </div>
            </div>
          </td>
          <td className="text-accent">
          {order.email}
          </td>
          <td className="text-primary">{order.tablename}</td>
          <td className="text-primary">{order.person}</td>
         
        </tr>)}
  
    
   
  </tbody>
  

  
</table>
<img src={coffee} alt="" />
</div>

      </div>
  )
}
export default ManageTables;