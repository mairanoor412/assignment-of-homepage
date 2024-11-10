import style from "./contact.module.css"





const ContactPage =()=>{
    return(
        <form id="contact">
            
            <div className={style.container}>
                
            <h1 className={style.heading}> Contact Me </h1>
                <div className={style.input}>
                <input className={style.name} type="text" id="name" placeholder="Username" required />
                    <br/>
        

                    <input className={style.email} type="text" id="email" placeholder="Email" required />
                    <br/>

                    <input className={style.phone} type="tel" id="phone" placeholder="Phone" required />
                    <br/>

                    <textarea className={style.message}  name="Message"  rows={3} cols={30} placeholder="Message"> </textarea>
                    <br/>

                    {/* button */}
                    <button className={style.button}> 
                    Send Message
                    </button>

                </div>
            </div>
        </form>
    )
        
        

                
    
}

export default ContactPage;
