import React from "react";
import ProductRow from "./ProductRow";


export default function ProductTable(props){

    const { products } = props;
    return (
        <>
            {products.map( elem =>{
                return (
                    
                    <ProductRow key={elem.id} products={elem}/>
                )
             })}
        </>
    )
}
