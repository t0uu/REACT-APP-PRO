import { useForm } from '../hooks/useForms'
import '../styles/styles.css'


export const RegisterPage = () => {

  const { isValidEmail,onResetForm,onChange,onSubmit,name,email,password1,password2} = useForm({name:'',email:'',password1:'',password2:''})
  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={onSubmit}>
        <input className={`${name.trim().length <= 0 && 'has-error'}`} type="text" value={name} name="name" placeholder="Name" onChange={onChange}/> 
        {
            name.trim().length <= 0 && <span>Este campo es necesario</span>
        }
        <input className={`${!isValidEmail(email) && 'has-error'}`} type="email" value={email} name="email" placeholder="email" onChange={onChange}/>
        {
            !isValidEmail(email) && <span>Email no es válido</span>
        }
        <input className={ `${password1.trim().length <= 0 && 'has-error'}`} type="password" value={password1} name="password1" placeholder="Password" onChange={onChange}/>
        {
            password1.trim().length <= 0 && <span>Este campo es necesario</span>
        }
         {
            password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 letras</span>
        }
        <input className={`${password2.trim().length <= 0 && 'has-error'}`} type="password" value={password2} name="password2" placeholder="Repeat Password" onChange={onChange}/>
        {
            password2.trim().length <= 0 && <span>Este campo es necesario</span>
        }
        {
            password2.trim().length < 0 && password1 !== password2 && <span>La contraseñas deben ser iguales</span>
        }
        <button type="submit">Create</button>
        <button onClick={onResetForm}>Reset</button>
        </form>
    </div>
    )
}
