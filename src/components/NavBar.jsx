import { useState } from 'react'
import  styles from '../styles/Navbar.module.css';



function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <a href='/' className={`${styles.logo}`}>Rempill </a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='/' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='/remember' className={`${styles.navLink}`}>Recordatorios</a>
            </li>
            <li onClick={removeActive}>
              <a href='/diabetes' className={`${styles.navLink}`}>Diabetes</a>
            </li>
            <li onClick={removeActive}>
              <a href='/hiper' className={`${styles.navLink}`}>Hipertension</a>
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>


      </header>
    </div>
  );
}


export default Navbar;