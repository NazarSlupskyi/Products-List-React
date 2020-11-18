import React from 'react'
import Item from './Item'

const ProductsList = ({ products, serchInputValue, handlDeletButton, pinnedItem }) => {
    
    return (
        <>  
            {serchInputValue === '' 
                ? products.map((product) => <Item key={product.id} pinnedItem={() => pinnedItem(product)} handlDeletButton={() => handlDeletButton(product)} product={product}/>) 
                : products.filter((product) => product.name.includes(serchInputValue) || product.description.includes(serchInputValue))
                          .map((product) => <Item key={product.id} pinnedItem={() => pinnedItem(product)} handlDeletButton={handlDeletButton} product={product}/>)
            }
        </>
    )
}

export default ProductsList;