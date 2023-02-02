import style from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps,  ProductCardProps } from '../interfaces/interfaces';




export const ProductContext =  createContext({} as ProductContextProps)
const { Provider} = ProductContext;









export const ProductCard = ({children,product}:ProductCardProps) => {


    const {counter,increaseBy} = useProduct()
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
    <div className={style.productCard}>
      {children}
        {/* <img className={style.productImg} src="./coffee-mug.png" alt="Coffe Mug"/> */}
       {/* <ProductImage img={product.img}/>
       <ProductTitle title={product.title}/>
    <ProductButtons increaseBy={increaseBy} counter={counter}/> */}
        
    </div>
    </Provider>
  )
}
