
import  React ,{useContext} from  "react";
import styles from "./Robot.module.css";
import {appContext,appSetStateContext} from "../AppState";
import {useAddToCart} from './AddToCart';
export interface RobotProps{
    id: number; 
    name:string;
    email:string;
} 

const  RobotDiscount:React.FC<RobotProps> = ({id,name,email}) => {
    const value = useContext(appContext);
    const addToCart = useAddToCart();
    
               
        return (
            <div className={styles.cardContainer}>
    <img src={`https://robohash.org/${id}`} alt="robot"/>
    <h2>discount goods</h2>
    <h2>{name}</h2>
    <p>{email}</p>
    <p>author:{value.username}</p>
    <button onClick={()=>addToCart(id,name)}>add to cart</button>
    </div>
        )

};

export  default  RobotDiscount;

