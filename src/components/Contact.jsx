import { useState } from "react";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("");
  console.log(name, message, email);
  return (
    <section id="contact" className="bg-[#000300]">
    <div className="py-8 lg:py-16 px-4 mx-auto border-solid border-8 border-[#49c5b6] mt-[5%] m-10  max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#49c5b6]">Contact Me?</h2>
      <form className="space-y-8" name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className="input">
          <label className="block mb-2 text-md text-[#49c5b6] font-bold" htmlFor="name">Name:</label>
          <input
          className="font-bold shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label className="block mb-2 text-md font-bold text-[#49c5b6]" htmlFor="email">Email:</label>
          <input
          className="font-bold block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            type="text"
            id="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 text-md font-bold text-[#49c5b6]" htmlFor="message">Message:</label>
          <textarea
          className="font-bold block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          rows={6}  
          id="message"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
<div className="flex justify-center">
        <button className="bg-[#49c5b6] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Get in touch!</button>
        </div>
      </form>
    </div>
    </section>
  );
}

export default Contact;
