import  Post  from "./components/Post"
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
  <div> 
    
    <div className={styles.wrapper}>
      
      <Sidebar />
      <Header />
      <main>
        <Post />
      </main>
    </div>
  </div>
  )
}


