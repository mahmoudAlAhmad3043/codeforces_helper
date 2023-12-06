import React from 'react'
import FormikControl from './FormikControl'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import {AiOutlineSearch} from 'react-icons/ai'

function Search(props) {
    const initialValues = {
        handle: ''
      }
      const validationSchema = Yup.object({
        // handle: Yup.string().required("Required!")
      })
      const onSubmit = (values) => {
        props.search(values)
      }
      const inputStyle = 'flex flex-col items-start gap-1 w-full'
      const labelStyle = 'font-bold text-black'
      const fieldStyle = 'outline-none bg-slate-900 placeholder:text-slate-400 py-2 p-0 w-full'
      const FormStyle = "search-container bg-slate-900 text-slate-400 p-0.5 px-4 m-1  rounded-full";
      const searchIcon = 'scale-125 mr-1'
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
    {
      (formik) => {
        return (
          <Form className={FormStyle}>
            <AiOutlineSearch className={searchIcon}/>
            <FormikControl
              control="input"
              name="handle"
              label=""
              type="text"
              inputStyle={inputStyle}
              labelStyle={labelStyle}
              fieldStyle={fieldStyle}
              placeholder='Search'
            />
          </Form>
        )
      }
    }
  </Formik>
  )
}

export default Search