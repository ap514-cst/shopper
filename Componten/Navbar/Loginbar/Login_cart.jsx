
import{useFormik} from "formik"
import './Login_cart.css'
const Login_cart = () => {
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm({values:""})

    }
  })
  return (
    <div className='body'>
    <div className='login-container'>
     <h2>Login</h2>
 
      <form action="/submit" onSubmit={formik.handleSubmit}>
         <label for="name">Name</label>
         <input type="text" id="name" minLength={5} value={formik.values.name} onChange={formik.handleChange}  name="name" placeholder="Enter your name" required/>
 
         <label for="email">Email</label>
         <input type="email" id="email" value={formik.values.email} onChange={formik.handleChange} name="email" placeholder="Enter your email" required/>
 
         <label for="password">Password</label>
         <input type="password" id="password" minLength={8} value={formik.values.password} onChange={formik.handleChange} name="password" placeholder="Enter your password" required/>
 
         <div className="forgot-link">
             <a href="#">Forgot Password?</a>
         </div>
 
         <button className='button' type="submit">Submit</button>
     </form>
    </div>
    </div>
  )
}

export default Login_cart;
