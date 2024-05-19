"use client"
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const registrationSchema = Yup.object({
    fullname: Yup.string().min(2).required('Name is required'),
    email: Yup.string().email("Please enter valid email").required('Email is required'),
    password: Yup.string().min(6).max(20).required('Password is required'),
    repeat_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('repeat password is required'),
    phone:  Yup.number().required('Number is required')
})


const initialValues = {
    fullname: "", 
    email: "", 
    password: "", 
    repeat_password: "", 
    phone: "",
}

const RegistrationPage = () => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })


  return (
    <div>
        <h1 className='text-2xl font-bold text-center py-10'>Registration Form</h1>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname} type="text" name="fullname" id="fullname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="fullname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name*</label>
                { formik.errors.fullname && formik.touched.fullname? <p className='text-red-500 text-xs z-10'>{formik.errors.fullname}</p>: null }
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" name='email' id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address*</label>
                { formik.errors.email && formik.touched.email? <p className='text-red-500 text-xs z-10'>{formik.errors.email}</p>: null }
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password*</label>
                { formik.errors.password && formik.touched.password? <p className='text-red-500 text-xs z-10'>{formik.errors.password}</p>: null }
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.repeat_password} type="password" name="repeat_password" id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                { formik.errors.repeat_password && formik.touched.repeat_password? <p className='text-red-500 text-xs z-10'>{formik.errors.repeat_password}</p>: null }
            </div>
            <div className="relative z-0 w-[50%] mb-5 group">
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" pattern="[0-9]{10}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)*</label>
                { formik.errors.phone && formik.touched.phone? <p className='text-red-500 text-xs z-10'>{formik.errors.phone}</p>: null }
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

export default RegistrationPage;
