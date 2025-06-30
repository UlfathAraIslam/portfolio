/* eslint-disable react/no-unescaped-entities */
import  { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fvqv9yk', 'template_luo6gi2', form.current, 'pV-WCgKjCI4IcogQC')
      .then((result) => {
          console.log(result.text);
          setIsEmailSent(true);
          toast.success('Email sent successfully!');

      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send email!');

      });
  };
  const handleGoBack = () => {
    setIsEmailSent(false);
  };

  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      {!isEmailSent ? (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8 w-full flex flex-col justify-center items-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
            <p className="text-gray-300 py-4"> Submit the form below or shoot me an email </p>
          </div>
          <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="from_name" />
          <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="from_email" />
          <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded">
            Let's Collaborate
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl text-white">Email sent successfully!</p>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded" onClick={handleGoBack}>
            Go Back Home
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default Contact