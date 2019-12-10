import React, { ReactElement } from 'react'
import { Link } from 'gatsby';

interface Props {
  imgUrl: string;
  title: string;
  text: string;
  links: { linkText: string; linkUrl: string}[]
}

export default ({imgUrl, title, text, links}: Props): ReactElement => (
  <div className="w-full sm:w-1/2 md:w-1/3 p-2">
  <div className="rounded shadow-lg">
    <img className="rounded w-full" src={imgUrl} alt="Donald Wayne" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{text}</p>
    </div>
    <div className="px-6 py-4">
      {links.map(({linkText, linkUrl}) => (
        <Link to={linkUrl} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {linkText}
        </Link>
      ))}
    </div>
  </div>
  </div>
);