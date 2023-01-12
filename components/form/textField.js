import React from 'react'
import { ErrorMessage, useField } from 'formik';

const TextField = ({label, disabled, spanClass, placeholder,id, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className={spanClass}>
      <label className="mb-2 block text-sm text-gray-600">{label}</label>
      <div className='flex flex-row'>

        {
          props.type == 'tel' &&
          <div className="w-fit mr-2 bg-gray-200 px-3 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-green-400 outline-0 disabled:cursor-not-allowed">
            +91
          </div>
        }
        
        <input
          id={id}
          {...field}
          placeholder={placeholder}
          className={`mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40`}
          disabled={disabled}
          />
      </div>

      <ErrorMessage
        name={field.name}
        component="div"
        className=" my-2 text-red-500 text-sm"
      />
    </div>
  );
}

export default TextField