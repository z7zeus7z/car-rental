import style from '../../Styles/SignIn.module.css'
import Footer from '../Footer/Footer'
import CTA from '../CTA'
const Signin = (props) => {
  const {theme} = props
  const cardtheme= theme==='lightPrimary'?"lightSecondary":"darkSecondary"
  return (
    <>
    <div className={`${style.signInMainContainer} ${theme}`}>
        <div className={`${style.signInCard} ${cardtheme}`}> 
            <form action="">
            <div className={style.cardTitle}>Login Form</div>
            <hr />
            <div className={style.signInput}>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Password'/>
            </div>
              <div className={style.signHelp}>
                <div>  <input type="checkbox" name="" id="" />
                    <label htmlFor="">Remember me</label></div>
                  
                    <a href="">forget Password</a>  
              </div>
              <CTA text={'LOGIN'}/>
              <div className={style.signUp}><p>Not a member?</p><a href="">Signup now</a></div>  
            </form>
        </div>
     </div>
     <Footer/>
     </>
)
}

export default Signin