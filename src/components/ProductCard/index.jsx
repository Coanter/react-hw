export function ProductCard(props) {
    const {image, category, name, price} = props.data;
    return (
        <div>
            <img src={image} alt="" />
            <div>{category}</div>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
    )
}