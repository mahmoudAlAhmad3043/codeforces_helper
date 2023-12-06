import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'



const Filter = React.forwardRef((props,filterRef)=> {

  const initialValues = {
    tags: []
  }
  const validationSchema = Yup.object({
    
  })
  const onSubmit = (values,onSubmitProps) => {
    props.sendSelectedTags(values,onSubmitProps);
  }
  const inputStyle = "flex flex-col items-start gap-1";
  const labelStyle = "font-bold";
  const fieldStyle = "flex w-full justify-between flex-col gap-2";
  const groupCheckboxStyle = "flex flex-row gap-2";
  const FormStyle =
    "shadow-sm shadow-black  w-60 grow  bg-slate-400 bg-opacity-80 font-bold p-2 m-4 flex flex-col gap-y-6  rounded-l-xl filter clos-filter  duration-200 transition-all";
  const submitStyle =
    "duration-300 bg-opacity-75 bg-slate-900 text-slate-300 rounded-xl p-2 hover:bg-slate-950 w-30 self-center";
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
      {
        (formik) => {
          if (props.item.tags) {
            return (
              <Form className={FormStyle} ref={filterRef}>
                <FormikControl
                  control="checkbox"
                  name="tags"
                  label="Tags:"
                  inputStyle={inputStyle}
                  labelStyle={labelStyle}
                  fieldStyle={fieldStyle}
                  options={props.item.tags ? props.item.tags : []}
                  groupCheckboxStyle={groupCheckboxStyle}
                />
                <button type='submit' className={submitStyle} disabled={formik.isSubmitting}>Show results</button>
              </Form>
            )
          } else {
            return (
              <Form className={FormStyle} ref={filterRef}>
                <p className='text-slate-800 font-bold text-center'>No Tags</p>
              </Form>
            )
          }

        }
      }
    </Formik>
  )
})

export default Filter