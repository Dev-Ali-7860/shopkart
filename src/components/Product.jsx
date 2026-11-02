import { useCart } from './CartContext'

const Product = ({ id, image, title, price, category, rating }) => {

    const { addToCart } = useCart();

    const product = {
        id,
        image,
        title,
        price,
        category
    }
    return (
        <>
            <div className="card" style={{ width: '500px' }}>
                <img className="card-img-top" src={image} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h4 className="card-title">$ {price}</h4>
                    <p className="card-text">{category}</p>
                    <h3>Product rating: {rating}</h3>
                    <button className="btn btn-success" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Product
