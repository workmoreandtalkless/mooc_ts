import React,{useState,useEffect} from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json'
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import { idText } from 'typescript';


interface Props {

}

interface State {
  robotGallery: any[];
  count: number;
}

const App : React.FC =(props) =>{
  const [count,setCount] = useState<number>(0);
  const [robotGallery,setRobotGallery] = useState<any>([])
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<String>();
  useEffect(()=>{
    document.title = `click${count}times` // 什么时候加$,什么时候不加？
  },[count])
  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true);
      try{
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      }
      catch(e){
        setError(e.message);
      }
      setLoading(false);
    }
    fetchData()
  },[]);
    
  // })

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
      <h1>QuantVortex</h1>
      <img src={logo} className={styles.appLogo} alt="logo"/> 
      </div>
      {/* <h2>{props.username}</h2> */}
      <button onClick={()=>{
        console.log("upcount:" , count);
        setCount(count+1);
        console.log("count:" , count);
        setCount(count+1);
      }}
        >Click</button>
        <span>count:{count}</span>
      <div>
        <ShoppingCart />
        {
          !error || error!=="" && <div>Error:{error}</div>
        }
        { !loading ? (
          <div className={styles.robotList}>
      {robotGallery.map(
      (r) =><Robot id={r.id} name={r.name} email ={r.name}/>)}
  
      </div>
        ):(
          <h2>loading</h2>
        )
          
        }
      </div>

      
    </div>
   
 
);
}

 


export default App;
