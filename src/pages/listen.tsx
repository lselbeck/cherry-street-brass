import React, { ReactElement } from 'react'
import Header from '../components/header';
import { Link } from 'gatsby';
const trumpetIcon = require('../images/trumpet.svg');

const songs = [
  {
    title: 'Bittersweet Samba',
    url: 'todo',
  },
  {
    title: 'Brasilia',
    url: 'todo',
  },
  {
    title: 'Casino Royale',
    url: 'todo',
  },
  {
    title: 'Cinco De Mayo',
    url: 'todo',
  },
  {
    title: 'Crea Mi Amor',
    url: 'todo',
  },
  {
    title: 'Desafinado',
    url: 'todo',
  },
  {
    title: 'El Garbanzo',
    url: 'todo',
  },
  {
    title: 'Felicia',
    url: 'todo',
  },
  {
    title: 'Flamingo',
    url: 'todo',
  },
  {
    title: 'Freckles',
    url: 'todo',
  },
  {
    title: 'Girl From Ipanema',
    url: 'todo',
  },
];

export default (): ReactElement => (
  <>
    <Header/>
    <div className="flex flex-wrap p-10">
      <div className="flex flex-wrap w-1/2">
        <div className="flex w-full">
          <h2>
            Take a sample of the real thing! Or view our{' '}
            <a href="/songlist.ods" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
              full repotoire here!
            </a>
          </h2>
        </div>
        <div className="flex flex-wrap w-full">
          {songs.map(song => (
            <div
              className="w-2/3 my-2 mx-5"
            >
              <img className="w-8 h-8 inline mx-2" src={trumpetIcon} alt='bullet point'/>
              <span>{song.title}</span>
            </div>
          ))}
        </div>
        <div className="flex w-full">
            <Link to="/contact">
            <button
              className="bg-blue-500 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Hear Us Live!
            </button>
            </Link>
        </div>
      </div>
      <div className="w-1/2 bg-gray-400">

      </div>
    </div>
  </>
);