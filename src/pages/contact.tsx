import React, { ReactElement, useState } from 'react'
import Header from '../components/header';
const trumpetIcon = require('../images/trumpet.svg');

const things = ['Parties', 'Weddings', 'Auctions', 'Fundraisers'];

export default function Contact(): ReactElement {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitClicked, setSubmitClicked] = useState(false)

  return (
    <>
      <Header/>
      <div className="w-full m-5">
        <div className="flex flex-wrap -m-2 w-full shadow-md rounded px-10 pt-6 pb-8 mb-4">
          <div className="w-1/2">
            <h2>Dont be shy, contact us today! We are available for:</h2>
              {things.map(thing => (
              <p className="my-2 ml-4">
                <img className="w-8 h-8 inline" src={trumpetIcon} alt='bullet point'/>
                <span className="text-capitalize"> {thing}</span>
              </p>
              ))}
            <p className="mt-4">
              Fill out the form, or email us directly at{' '}
              <a href="mailto:cherrystreetbrass@gmail.com">cherrystreetbrass@gmail.com</a>
            </p>
          </div>
          <form className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              <p className="text-red-500 text-xs italic" hidden={!submitClicked || !!email.trim()}>Please enter your email.</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message here"
                value={message}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}/>
              <p className="text-red-500 text-xs italic" hidden={!submitClicked  || !!message.trim()}>Please enter some text.</p>
            </div>
            <button
              disabled={!message.trim() || !email.trim()}
              className="bg-blue-500 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setSubmitClicked(true)}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
