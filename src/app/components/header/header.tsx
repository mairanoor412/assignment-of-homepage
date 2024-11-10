import Link from "next/link"
import style from "./header.module.css"

 const Header = () => {
  return (
        <header className={style.header}>
          <div className={style.container}>
            <div className={style.navgrid}>
              <div className={style.logo}>
                <h1 className={style.nav_logo}> Portfolio </h1>
              </div>


              <nav className={style.nav}>
            <ul className={style.ul}>
               <li className={style.li}>
                <Link href="/" target="_blank" className={style.navlink}> Home </Link>
               </li>

               <li className={style.li}>
                <Link href="#about" target="_blank" className={style.navlink}> About</Link>
               </li>

              
               <li className={style.li}>
                <Link href="#contact" target="_blank" className={style.navlink}> Contact </Link>
               </li>
            </ul>
            </nav>


            </div>
          </div>


        </header>
    
  )
}

export default Header;





