import './Card.css'; // Importa el archivo CSS para los estilos de la tarjeta

function Card(props){
    return(
        <div className="Card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;