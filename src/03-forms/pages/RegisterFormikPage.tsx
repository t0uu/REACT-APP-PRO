import * as Yup from 'yup';
import '../styles/styles.css'
import { Formik, Form, ErrorMessage, Field } from 'formik';

export const RegisterFormikPage = () => {


  return (
    <div>
        <h1>Register Formik  Page</h1>
        <Formik 
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',

  }}
  onSubmit={(values) => {console.log(values)}}
   validationSchema={
    Yup.object({
    firstName: Yup.string().min(2,'El nombre debe de ser de 3 caracteres o más').max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
    lastName: Yup.string().max(10,'Debe de tener 10 caracteres o menos').required('Requerido'),
    email: Yup.string().email('must be a valid email').required('Requerido'),
})} 
    >
      {
        formik => (
          <Form >
       <label htmlFor='firstName'>First Name</label>
      <Field name="firstName" type="text" placeholder="First Name"/>
      <ErrorMessage name='firstName' component="span" />
    <label htmlFor='lastName'>Last Name</label>
    <Field name="lastName" type="text" />
    <ErrorMessage name="lastName" component="span"/>
    <label htmlFor='email' >Email Address</label>
    <Field name="email" type="email"/>
    <ErrorMessage name="email"  component="span"/>

<button type='submit'>Submit</button>
<button type="reset">Reset</button>
 </Form>
         ) 
}
 </Formik>
       
    </div>
    )
}
