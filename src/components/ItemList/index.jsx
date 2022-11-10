import React from "react";
import Item from "../Item";
import './styles.scss';

//Hace el map con los personajes
const ItemList = ({ products }) => {
    return (
        <div className="container d-flex  justify-content-center align-items-center flex-wrap mt-1">
            {products.map((product) => { return <Item key={product.id} product={product} />})}
        </div>
    );
};

export default ItemList;
