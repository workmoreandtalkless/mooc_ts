import React, { useContext } from "react";
import {appSetStateContext } from "../AppState";
import {RobotProps} from "./Robot";
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>)=>{
    // return class extends React.Component {}  
    return (props) => {
       
        const setState = useContext(appSetStateContext)
        const addToCart = (id,name) =>{ // 这个function使用的是需要传入的参数，而不是来自props
            if(setState){//Thinking: how to simplified here.
                setState(state => {
                    return {
                        ...state,//expand state
                        shoppingCart:{
                            items:[...state.shoppingCart.items,{id,name}]
                        }
                    }
                })
            }
            
        };
        return <ChildComponent {...props} addToCart={addToCart} />//组件间的数据传递使用的是props
    }
}

export const useAddToCart = () =>{
    const setState = useContext(appSetStateContext)
        const addToCart = (id,name) =>{ // 这个function使用的是需要传入的参数，而不是来自props
            if(setState){//Thinking: how to simplified here.
                setState(state => {
                    return {
                        ...state,//expand state
                        shoppingCart:{
                            items:[...state.shoppingCart.items,{id,name}]
                        }
                    }
                })
            }
            
        };

        return addToCart;
}