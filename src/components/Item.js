import React from 'react'
import logo from '../icon/mildlee.png'
import pin from '../icon/pin.png'
import pin2 from '../icon/pin2.png'

const Item = ({product, handlDeletButton, pinnedItem}) => {
    return (
        <div className='main-content'>
            <ul className='products-list'>
                <li className='product-item'>
                    <div className='prodact-header'>
                        <div className='prodact-name'>{product.name}</div>      
                    </div>
                    <div className='prodact-section'>
                        <img className='product-img' alt='item img' src={logo} />
                        <div className='product-description'>{product.description}</div>
                    </div>
                    <div className='product-footer'>
                        <div className='product-price'>{product.price} $</div>
                        <img onClick={pinnedItem} className='prodact-stick' alt='pinned' src={product.pinned === true ? pin : pin2} />
                        <button onClick={handlDeletButton} className='button-delet'>X</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Item  