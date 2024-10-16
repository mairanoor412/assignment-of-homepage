import style from "./footer.module.css"

 const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.container} >
            <p className={style.footer_para}>  All Right Reserved <span className={style.red}>|</span> This template is made by<span className={style.color}> Maira Naeem</span> </p>
        </div>
    </footer>
  )
}
export default Footer;