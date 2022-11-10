import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.scss'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    //Navega hacia el detalle del personaje
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div className="container d-flex flex-column align-items-center">
      <img onClick={navigateDetail} src={product.picture_url} className="img-fluid character-image rounded" alt="character"/>
      <p className='text-capitalize fs-5' key={product.id}>{product.name}</p>
    </div>
  )
}

export default Item