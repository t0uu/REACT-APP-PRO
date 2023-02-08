import { ProductImage,ProductButtons,ProductTitle } from '../components/';

import '../styles/custom-styles.css'
import ProductCard from '../components/index';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import { useState } from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/Product';


const product = products[0]

export const ShoppingPage = () => {


   const { onProductCountChange,shoppingCart} = useShoppingCart()


  return (
    <div >
        <h1>Shopping Store</h1>
        <hr/>

        <ProductCard 
        key={product.id}
        product={product} 
        className="bg-dark" 
        initialValues={{
            count:4,
            maxCount:10,
        }}
        >
            {
                ({count,reset,increaseBy,isMaxCountReached,maxCount}) => (
                    <>
                    <ProductImage className="custom-image"/>
                    <ProductTitle  className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons" />
                    <button onClick={reset}>Reset</button>
                    <button onClick={() => increaseBy(-2)}>-2</button>
                    {/* Si no se llega al isMaxCount, ocultar */}
                    {!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>
                    }
                    <span>{count} - {maxCount}</span>
                    </>
                )
            }
        </ProductCard>

       
      


       

        


       
    </div>
    )
}
