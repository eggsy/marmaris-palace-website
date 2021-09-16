/* eslint-disable react/no-unescaped-entities */

import Social from "../../Social";
import Button from "../../Button";

/* Import data */
import contact from "../../../data/contact";
import React from "react";

const Contact: React.FC = () => (
  <section className="grid grid-cols-2 gap-20 p-12 text-white bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-500 rounded-xl">
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="text-xl">
          If you aren't sure which room to decide, give us a call and our team
          will help you to find the best place for you, and your family!
        </p>
      </div>

      <div className="space-y-2">
        {contact.map((cnt, i) => {
          const Icon = cnt.icon;

          return (
            <ContactItem key={i}>
              <Icon size={30} />
              <span>{cnt.value}</span>
            </ContactItem>
          );
        })}
      </div>

      <Social />
    </div>

    <div className="flex flex-col p-10 space-y-4 text-gray-700 bg-white rounded-xl">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          className="p-4 border-2 border-gray-100 rounded-xl focus:outline-none"
          placeholder="Enter your name..."
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="p-4 border-2 border-gray-100 rounded-xl focus:outline-none"
          placeholder="Enter your email..."
        />
      </div>

      <div className="flex flex-col flex-grow space-y-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="h-full p-4 border-2 border-gray-100 rounded-xl focus:outline-none"
          placeholder="Why are you contacting us?"
        />
      </div>

      <Button>Send</Button>
    </div>
  </section>
);

const ContactItem: React.FC = ({ children }) => (
  <div className="flex items-center p-2 space-x-4 transition-colors bg-blue-600 bg-opacity-0 border-2 border-blue-700 border-opacity-0 rounded-lg cursor-pointer w-max hover:bg-opacity-25 hover:border-opacity-5">
    {children}
  </div>
);

const ContactInput: React.FC = () => <input />;

export default Contact;
