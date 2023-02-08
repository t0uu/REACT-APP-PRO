import { useContext, CSSProperties,useCallback } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'

interface Props{
    className?: string;
    style?: CSSProperties;
    
}

export const ProductButtons = ({className,style}: Props) => {
    // TODO: maxCount
    const {counter,increaseBy,maxCount} = useContext(ProductContext);

    // TODO: isMaxReached = useCallback, dependecias [count,maxCount] // TRUE O FALSE
    // true si el count === maxCount
    // false si no lo es
    const count = useCallback(
      () => {
        
        if(counter === maxCount){
            return true
        }else{
            return false
        }
      },
      [counter,maxCount]
    )
     
    return (
<div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}>{counter}</div>
            <button onClick={() => increaseBy(1)} className={  `${styles.buttonAdd}  ${ count() && styles.disabled}`  }>+</button>
        </div>
    )
}