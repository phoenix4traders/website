import React from "react";
import { Field, ErrorMessage, useField } from "formik";

const TextareaField = ({ label, disabled, spanClass,description, id, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={spanClass}>
      <label className="mb-2 block text-sm text-gray-600">{label}</label>
      <div className="text-xs mb-2">{description}</div>
      <Field
        id={id}
        as="textarea"
        {...field}
        className={`mt-2 block h-32 w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:focus:border-blue-400 md:h-48`}
        disabled={disabled}
      />

      <ErrorMessage
        name={field.name}
        component="div"
        className="my-2 text-red-500 text-sm"
      />
    </div>
  );
};

export default TextareaField;