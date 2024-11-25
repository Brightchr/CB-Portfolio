import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactForm = () => {
  const formRef = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Reference:", formRef.current); // Check if this is not null or undefined

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessageStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Email send failed:", error.text);
          setMessageStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div id="contact-form" className="p-6 shadow-lg rounded-lg bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Contact Form
      </h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div className="relative">
          <FiUser className="absolute top-3 left-4 text-gray-500" />
          <input
            type="text"
            name="name"
            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="relative">
          <FiMail className="absolute top-3 left-4 text-gray-500" />
          <input
            type="email"
            name="email"
            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="relative">
          <FiMessageCircle className="absolute top-3 left-4 text-gray-500" />
          <textarea
            name="message"
            rows="5"
            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded transition duration-300 hover:shadow-lg hover:shadow-blue-500/50"
        >
          Send Message
        </button>
      </form>
      {messageStatus && (
        <p className="mt-4 text-center text-green-400">{messageStatus}</p>
      )}
    </div>
  );
};

export default ContactForm;
