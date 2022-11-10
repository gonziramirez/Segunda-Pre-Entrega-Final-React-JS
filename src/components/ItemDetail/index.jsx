import React from 'react';
import './styles.scss';

const ItemDetail = ({character}) => {
  console.log(character)
  // Operador ternario para traducir texto de "male" a "Masculino" o de "female" a Femenino
  character.gender === "male" ? character.gender = "Masculino" : character.gender = "Femenino"
  return (
    <div className='item-detail'>
      <img src={character.picture_url} width={450}/>
      <h1>{character.name}</h1>
      <h2>Genero: {character.gender}</h2>
      <button className='btn btn-dark'>Añadir al carrito</button>
    </div>
  )
}

export default ItemDetail