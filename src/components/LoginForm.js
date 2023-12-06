import { Form, Formik } from 'formik'
import * as Yup from "yup";
import FormikControl from './FormikControl';
import server from '../data/server';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  
  const navigate = useNavigate()
 
  const initialValues = {
    handle: ''
  }
  const validationSchema = Yup.object({
    handle: Yup.string().required("Required!")
  })
  const onSubmit = (values, onSubmitProps) => {
    fetch(server + '/CodeforcesHelper_api?handle=' + values.handle)
    .then((results) => results.json())
    .then(data => {
      if(data.status){
      console.log(data);
      sessionStorage.setItem('handle',data.result[0].handle);
      sessionStorage.setItem('rank',data.result[0].rank);
      sessionStorage.setItem('rating',data.result[0].rating);
      onSubmitProps.setSubmitting(false);
      navigate('/home');
      }else{
        onSubmitProps.setSubmitting(false);
        navigate('/error');
      }
    }).catch(()=>{
      onSubmitProps.setSubmitting(false);
      navigate('/error');
    })
  }
  const inputStyle = 'flex flex-col items-start gap-1'
  const labelStyle = 'font-bold text-black'
  const fieldStyle = 'rounded-xl outline-none p-2 w-full text-white text-md'
  const FormStyle =
    "shadow-sm shadow-black max-w-sm grow  bg-gray-200 bg-opacity-50  p-2 m-4 flex flex-col gap-y-6  rounded-xl";
  const submitStyle =
    "duration-300 bg-opacity-75 bg-black text-white rounded-xl p-2 hover:bg-opacity-60 w-20 self-center";
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      
      {
        (formik) => {
          return (
            <Form className={FormStyle} >
              <div className="text-black font-bold text-xl">Codeforces Helper</div>
              <FormikControl
                control="input"
                name="handle"
                label="Handle"
                type="text"
                inputStyle={inputStyle}
                labelStyle={labelStyle}
                fieldStyle={fieldStyle}
                placeholder='Enter your handle on codeforces.'
              />
              <button type='submit' className={submitStyle} disabled={formik.isSubmitting}>Login</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default LoginForm