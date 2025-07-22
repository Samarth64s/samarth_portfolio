import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gs1lycy", // Replace with EmailJS Service ID
        "template_pvg073f", // Replace with EmailJS Template ID
        form.current,
        "_hdN4bi7fCa-Bi1fx" // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log("Result", result);
          form.current.reset();
        },
        (error) => {
          console.log("Error", error);
          alert("Failed to send! Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex items-start justify-center px-4 py-5">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-8">
            I am available for freelance work and collaborations. Drop your
            details below and I will get back to you.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Firstname"
                name="Firstname"
                required
                className="bg-gray-700 p-3 rounded outline-none focus:ring-2 ring-green-400 w-full"
              />
              <input
                type="text"
                placeholder="Lastname"
                name="Lastname"
                required
                className="bg-gray-700 p-3 rounded outline-none focus:ring-2 ring-green-400 w-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email address"
                name="Email"
                required
                className="bg-gray-700 p-3 rounded outline-none focus:ring-2 ring-green-400 w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                name="Phone"
                className="bg-gray-700 p-3 rounded outline-none focus:ring-2 ring-green-400 w-full"
              />
            </div>
            <select
              name="Service"
              className="w-full bg-gray-700 p-3 rounded outline-none focus:ring-2 ring-green-400"
            >
              <option>Web Development</option>
              <option>App Development</option>
              <option>Game Development</option>
            </select>
            <textarea
              name="Message"
              placeholder="Type your message here."
              className="w-full bg-gray-700 p-3 rounded outline-none focus:ring-2 ring-green-400 h-32"
            />
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-300 text-gray-900 font-semibold px-8 py-3 rounded transition"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <FiPhone className="text-green-400 text-2xl" />
            <div>
              <h4 className="text-gray-300">Phone</h4>
              <p className="text-gray-400">(+91) 8962346214</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMail className="text-green-400 text-2xl" />
            <div>
              <h4 className="text-gray-300">Email</h4>
              <p className="text-gray-400 break-all sm:break-normal">
                malviya214samarth@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMapPin className="text-green-400 text-2xl" />
            <div>
              <h4 className="text-gray-300">Address</h4>
              <p className="text-gray-400">Bhopal, Madhya Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
