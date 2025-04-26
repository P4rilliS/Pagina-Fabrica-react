import './Card.css'; // Importa el archivo CSS para los estilos de la tarjeta

function Card(props){
    return(
        <div className="Card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} className="Card-image" />
            <p className="Card-price">{props.price}</p>
        </div>
    );
}

export default Card;