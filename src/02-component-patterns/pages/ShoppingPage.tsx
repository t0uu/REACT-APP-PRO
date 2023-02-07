import { ProductImage,ProductButtons,ProductTitle } from '../components/';

import '../styles/custom-styles.css'
import ProductCard from '../components/index';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import { useState } from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/Product';


export const ShoppingPage = () => {


   const { onProductCountChange,shoppingCart} = useShoppingCart()


  return (
    <div >
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
        }}>

      {
        products.map(product => (
        <ProductCard 
        key={product.id}
        product={product} 
        className="bg-dark" 
        onChange={(evento) => onProductCountChange(evento)}
        value={shoppingCart[product.id]?.count || 0 }
        >
           <ProductImage className="custom-image"/>
           <ProductTitle  className="text-white text-bold"/>
           <ProductButtons className="custom-buttons" />
        </ProductCard>

        ))
      }



        {/* <ProductCard product={product} style={{
            backgroundColor:'#70D1F8'
        }}>
           <ProductImage style={{
            boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
           }} />
           <ProductTitle title="Coffe Mug"  style={{
            fontWeight:'bold'
           }}/>
           <ProductButtons style={{
            display:'flex',
            justifyContent:'end'
           }} />
        </ProductCard> */}
        </div>

        <div className='shopping-cart'>
           {Object.entries(shoppingCart).map(([key,product]) => (
               
           <ProductCard 
           key={key}
           product={product} 
           className="bg-dark" 
           style={{width:'100px'}}
           value={product.count}
           onChange={(evento) => onProductCountChange(evento)}
           >
              <ProductImage  className="custom-image"/>
              <ProductButtons count={product.count} className="custom-buttons" style={{display:'flex',justifyContent:'center'}} />
           </ProductCard>
           
          ))}
          </div>



       
    </div>
    )
}
