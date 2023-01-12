import React, {useState} from "react";
import { FaInstagram } from "react-icons/fa";


import { TextareaField, TextField } from "../index";
import { Formik, Form, FormikErrors } from "formik";

import { sendResponse } from "../../src/discord";

import * as yup from "yup";

const ContactForm = () => {


  const contactFormSchema = yup.object().shape({
    name: yup.string().required("Please Enter Your Name"),
    email:  yup.string().email()
      .required("Please enter your email")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Enter a valid email"
      ),
    subject: yup.string().max(50,"Character Limit is 50").required("Please Specify the Reason"),
    message: yup.string().max(500,"Character Limit is 500").required("Please Write something")
});

const [submitting, setSubmitting] = useState(false);  
const [submitBtnText, setSubmitBtnText] = useState("Send Message");  

const callbackFunction = (res, resetForm) => {
  setSubmitting(false);
  if(res.ok){
    setSubmitBtnText("Message Sent");
    setTimeout(()=>{
      setSubmitBtnText("Send Message");
      resetForm();
    },1500)
  }
  else{
    setSubmitBtnText("Some Error Occured, Try Reloading")
  }
}

  const onFormSubmit = (values, callback, resetForm) => {
    console.log(values);
    setSubmitting(true);
    setSubmitBtnText("Sending Message")
    const msg = `
     You got a message from ${values.name}: \n
     \n
     ${values.message}
     \n
     you can reply at ${values.email}
     `
    sendResponse(msg, values.subject, callback, resetForm)
  }


  return (
    <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md my-10">
    

    <Formik
      initialValues={{ name:"",email:"",message:"",subject:"" }}
      enableReinitialize={true}
      onSubmit={(values, { resetForm }) => {
        onFormSubmit(values, callbackFunction, resetForm);
      }}
      isSubmitting={true}
      validationSchema={contactFormSchema}
    >
        <Form className="container flex flex-col mx-auto gap-5">

          <div className="mt-6 flex flex-col gap-5 ">
            
            <div className="grid grid-cols-6 gap-5">
              <TextField
                spanClass="col-span-full md:col-span-3"
                label="Full Name"
                placeholder="Your Name"
                name="name"
                id="name"
                type="text"
              />

              <TextField
                spanClass="col-span-full md:col-span-3"
                label="Email"
                placeholder="Your Email"
                name="email"
                id="email"
                type="text"
              />

              <TextField
                spanClass="col-span-full"
                label="Subject"
                placeholder="Reason for sending the message"
                name="subject"
                id="subject"
                type="text"
              />

              <TextareaField
                spanClass="col-span-full"
                label="Message"
                name="message"
                id="message"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button className="flex flex-row justify-center mt-6 w-full transform rounded-md border-2 border-transparent bg-red-400 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:border-red-400  hover:bg-white hover:text-red-400 ">
                {
                  submitBtnText
                }
                {
                  submitting && 
                    <svg
                      className="ml-2 h-5 w-5 animate-spin "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                }
              </button>
            </div>
          </div>
                
        </Form>
    </Formik>
    </section>
  );
};

export default ContactForm;
