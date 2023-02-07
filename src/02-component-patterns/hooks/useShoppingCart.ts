
import { useState } from 'react';
import { Product, onChangeArgs, ProductInCart } from '../interfaces/interfaces';



   
   export const useShoppingCart = () => {

   
   // mi useState va a manejar un objeto y dentro tendremos un array que son strings que manejaran un objeto 
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({}); 

    const onProductCountChange = ({count,product}: onChangeArgs) => {
        // console.log({count,product})
        console.log({count});
        setShoppingCart(oldShoppingCart => {
        
            // const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product,count: 0};


            // if(Math.max(productInCart.count + count,0) > 0){
            //     productInCart.count += count;
            //     return {
            //         ...oldShoppingCart,
            //         [product.id]: productInCart
            //     }
            // }


            // // Borrar el producto
            //  const {[product.id]: toDelete,...rest} = oldShoppingCart
            //  return {...rest};

             


            if(count === 0){

              const {[product.id]: toDelete,...rest} = oldShoppingCart
              console.log({toDelete}); 
              return rest
                
                    
            
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product,count}
            }
        })

    }

    return{
        shoppingCart,
        onProductCountChange
    }
   }
