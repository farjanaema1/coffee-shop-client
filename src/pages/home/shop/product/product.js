import './product.css';

const Product = ({product, handleAddToCart}) => {
    const { name, img,price,brand } = product;
    return (
        <div>
  <div style={{
    height:250,
    width:300
  }} className="card card-side bg-base-200 shadow-xl text-white">
  <figure ><img style={{
    height:100
  }} className="photo " src={img}   alt="Movie"/></figure>
  <div className="card-body">
    <h1 className='para-link'>{brand}</h1>
    <h2 className="card-title font-link">{name}</h2>
    <p className='para-link'>Price : ${price}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleAddToCart(product)} className="btn btn-accent">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    )
}
export default Product;