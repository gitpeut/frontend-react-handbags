function Product({labeltxt, image, name, prijs}) {


    return (
        <article>
            <span>{labeltxt}</span>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h4>{prijs}</h4>
        </article>
    )

}

export default Product;
