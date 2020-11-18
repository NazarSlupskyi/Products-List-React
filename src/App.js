import React, { useState } from 'react'
import './App.css';
import { productsList } from './constans'
import ProductsList from './components/ProductsList';
import SearchInput from './components/SearchInput';
import AddNewProduct from './components/AddNewProduct';
import {Route, BrowserRouter, Switch} from 'react-router-dom'


const App = () => {
  const [products, setProducts] = useState(productsList)
  const [serchInputValue, setSerchInputValue] = useState('')
  const [pinned, setPinned] = useState(false)
  const [idCounter, setIdCounter] = useState(6)

  
  const handlSerchInput = (event) => {
    setSerchInputValue(event.target.value)
  }

  const handlDeletButton = (element) => {
    element.pinned && setPinned(false) 
    setProducts(products.filter((product) => product.id !== element.id))
  }


  const addProduct = () => {
    const form = document.querySelector('.add-product-form')
    const newProduct = {name: form.childNodes[1].value, description: form.childNodes[3].value, price: form.childNodes[2].value, id: idCounter + 1, pinned: false}
    
    if(newProduct.name === '' || newProduct.description === '' || newProduct.price === '' ) {
      alert('You wasnt fill all form !')
      return
    }

    setProducts([...products, newProduct])
    setIdCounter(idCounter + 1)
  }

  const pinnedItem = (element) => {
    if (!pinned) {
      const pinProduct = products.find((product) => product.id === element.id)
      const productsListWithOutPin = products.filter((product) => product.id !== pinProduct.id)
      
      pinProduct.pinned = true
      setProducts([pinProduct, ...productsListWithOutPin])
      setPinned(true)
    } else if (pinned && element.pinned) { 
      const pinnedItem = products.find((product) => product.pinned === true)
      
      pinnedItem.pinned = false
      setProducts(products.sort((a, b) => a.id - b.id))
      setPinned(false)
      
    } else {
      return
    } 

  }

  return (
    <BrowserRouter>
      <SearchInput handlSerchInput={handlSerchInput}/>
      <Switch>
        <Route path='/Add-produt' exact component={() => <AddNewProduct addProduct={addProduct}/>}/>
        <Route path='/' exact component={() => <ProductsList products={products} pinnedItem={pinnedItem} serchInputValue={serchInputValue} handlDeletButton={handlDeletButton}/>}/>
        <p>Page not found!</p>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
