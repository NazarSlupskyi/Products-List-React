import React from 'react'
import {Link} from 'react-router-dom'

const AddNewProduct = ({ addProduct }) => {
    return (
        <div className="add-product-conteiner">
            <div className="add-product-form">
                <div className="add-product-form-header">Fill out the form</div>
                <input className="add-product-input-name" placeholder="Enter name"/>
                <input className="add-product-input-name" type="number" placeholder="Price"/>
                <input className="add-product-input-name" placeholder="Description"/>
                <div className="button-conteiner">
                    <Link onClick={addProduct} className="send-button" to='/'>Add</Link>
                    <Link className="return-button" to='/'>Return</Link>
                </div>
                
            </div>
        </div>
    )
}

export default AddNewProduct