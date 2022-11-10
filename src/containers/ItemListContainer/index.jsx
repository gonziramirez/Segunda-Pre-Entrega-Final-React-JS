import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import {SyncLoader} from 'react-spinners'

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect(()=> {
        ( async ()=> {
            try {
                console.log(categoryId);
                let response;
                if (categoryId) {
                    response = await fetch(`https://attackontitanapi.herokuapp.com/api/${categoryId}`);
                } else {
                    response = await fetch(`https://attackontitanapi.herokuapp.com/api/characters`);
                }   
                const data = await response.json();
                console.log(data);
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    console.log(products);

    return (
        <>
            {products.length ? <ItemList products={products}/> : <SyncLoader className="container d-flex justify-content-center" color="black" margin={10} size={18} speedMultiplier={0.8}/> }                                       
        </>
    )
}