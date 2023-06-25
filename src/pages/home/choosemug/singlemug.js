const SingleMug = ({service}) => {
    const { name,id,icon} = service;

    return (
            <div>
        <div className="card w-96 bg-base ">
        <figure><img style={{
            height:200,
            margin:4
            

        }} src={icon} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="font-bold text-white text-xl ml-8 font-link">{name}</h2>
         
        </div>
      </div>
      </div>
      
       
    )
}
export default SingleMug;