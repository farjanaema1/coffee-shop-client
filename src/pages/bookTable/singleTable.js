const SingleTable = ({service}) => {
    const { name,id,icon} = service;

    return (
            <div  className=" mx-auto">
        <div style={{
            height:300
        }} className="card w-80 p-5 bg-secondary">
        <figure><img style={{
            height:150,
            margin:4
            

        }} className="mt-6" src={icon} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="font-bold text-white text-xl ml-8 font-link">{name}</h2>
         
        </div>
      </div>
      </div>
      
       
    )
}
export default SingleTable;