import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductTitleProps} from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';

// export interface ProductCardProps{
//     product: Product;
//     children?: ReactElement | ReactElement[];
// }

export interface Product {
    id:string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter:number,
    increaseBy: (value: number) => void;
    product:Product; 
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: ({className}: {className?: string | undefined;} ) => JSX.Element;
}


export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product {
    count: number,
}
