import style from "./hero.module.css"
import Image from "next/image";
import pic from "../hero-section/image/pixs.jpg"
import Link from "next/link";



 const HeroSection = () => {
  return (
    <main>
      <section className={style.hero_section}>
        <div className={style.hero_container}>
          <div className={style.hero_grid}>
            
            {/* hero section left side */}
            <div className={style.hero_section_data}>
              <p className={style.hero_top_data}> Hey i'm <span className={style.name}>Maira Naeem</span></p>
              <h1 className={style.hero_heading}> FRONTEND DEVELOPER </h1>
              <p className={style.hero_para}> 
                Hey i'm frontend developer from pakistan, dedicated to delivering beautiful, functional and user-friendly websites that exceed your expectations.
              </p>

               {/* Button */}
              <Link href="/about" target="_blank">
              <button className={style.btn}> More About Me </button>
              </Link>
              
            </div>

            {/* hero section right side */}
            <div className={style.hero_section_image}>
            <Image src={pic} alt="This is me Maira Naeem" className={style.hero_image} ></Image>
            </div>


          </div>
        </div>
      </section>
    </main>
  )
}

export default HeroSection;
