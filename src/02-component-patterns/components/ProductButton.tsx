import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import style from '../styles/styles.module.css'

export const ProductButtons = () => {
    const {counter,increaseBy} = useContext(ProductContext);
    return (
<div className={style.buttonsContainer}>
            <button onClick={() => increaseBy(-1)} className={style.buttonMinus}>-</button>

            <div className={style.countLabel}>{counter}</div>
            <button onClick={() => increaseBy(1)} className={style.buttonAdd}>+</button>
        </div>
    )
}