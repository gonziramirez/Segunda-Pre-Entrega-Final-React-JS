import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {
        // Hace el fetch para el detalle del personaje
        const getCharacterDetail = async () => {
            const response = await fetch(`https://attackontitanapi.herokuapp.com/api/characters/${id}`)
            const character = await response.json();
            setCharacter(character)
        }

        getCharacterDetail()
    }, [id])

    return (character ? <ItemDetail character={character}/> : <SyncLoader className="container d-flex justify-content-center" color="black" margin={10} size={18} speedMultiplier={0.8}/> )
};

export default ItemDetailContainer;
