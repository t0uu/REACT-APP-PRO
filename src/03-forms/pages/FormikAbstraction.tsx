import { useFormik,Formik,Field,Form,ErrorMessage, FormikHelpers, FormikValues} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyCheckbox,MySelect,MyTextInput } from '../components/';
interface FormValues {
   firstName: string;
    lastName: string;
    email: string; 
}
export const FormikAbstraction = () => {



  
    return (
  <div>
    <h1>Formik Abstraction Tutorial</h1>
    <Formik 
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      terms: false,
      jobType: '',

  }}
  onSubmit={(values) => {console.log(values)}}
   validationSchema={
    Yup.object({
    firstName: Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
    lastName: Yup.string().max(10,'Debe de tener 10 caracteres o menos').required('Requerido'),
    email: Yup.string().email('must be a valid email').required('Requerido'),
    terms: Yup.boolean().oneOf([true],'Debe de aceptar las condiciones'),
    jobType: Yup.string().required('Requerido').notOneOf(['it-jr'],'Está opcion no es permitida.')
})} 
    >
      {
        formik => (
          <Form >
            <MyTextInput 
            name='firstName' 
            label='firstName'
            placeholder='First Name'
            />

<MyTextInput 
            name='lastName' 
            label='lastName'
            placeholder='last Name'
            />
<MyTextInput 
            name='email' 
            label='Email Address'
            placeholder='Email'
            type="email"
            />

 
    <MySelect label='Job Type' name="jobType" as="select">
      <option value="">Pick something</option>
      <option value="developer">Developer</option>
      <option value="designer">Designer</option>
      <option value="it-senior">IT Senior</option>
      <option value="it-jr">IT Jr</option>
    </MySelect>
    <MyCheckbox label='Terms and Conditions' name="terms" type="checkbox" />

    <button type='submit'>Submit</button>
    </Form>
        )
      }
    </Formik>

    
  </div>
  )
}
