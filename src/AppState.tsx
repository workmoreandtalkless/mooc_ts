import React from "react"
interface AppStateValue{ //  define data type
    username:string;
    shoppingCart:{items:{id:number,name:string}[]}
}
 const defaultContextValue: AppStateValue ={// include AppStateValue 
    username:"AJAX",
    shoppingCart:{items:[]},
  }
  export const appContext = React.createContext(defaultContextValue);
  export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>>|undefined>(undefined);

 export const AppStateProvider: React.FC = (props) =>{ // function Component
      const [state,setState] = React.useState(defaultContextValue);
      return(
    <appContext.Provider value={state}>
    <appSetStateContext.Provider value = {setState}>
    {props.children}
    </appSetStateContext.Provider>
    </appContext.Provider>
      ) 
  }