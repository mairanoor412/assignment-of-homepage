import style from "./about.module.css"

import Image from "next/image"

 const AboutPage = () => {
  return (
    <div id="about">
        {/* About  section  */}
      
      <section id="about" className={style.about_section}>
        <div className={style.heading} > <h2> About Me </h2></div>
        
         <div className= {style.container}>
          <div className= {style.grid}>

            {/*About left section */}
            
        
            <div className= {style.left_data}>
              <p className= {style.para} > I am Maira Naeem a front-end developer with a strong passion for crafting responsive, scalable, and
                visually stunning web application. With expertise in HTML, CSS, TypeScript, Next.js, i am to deliver seamless user experience
                . i am excited to bring my skills to innovative projects and collaborate with like-minded individuals. </p>
            </div>

            {/* About right section */}
            <div>
              <Image src="/images/aboutpic.png" alt="about" width="500" height="500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AboutPage
