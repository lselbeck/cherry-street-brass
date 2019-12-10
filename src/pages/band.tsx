import React, { ReactElement } from 'react'
import Header from '../components/header';
import PhotoCard from '../components/photo-card';
const don: string = require('../images/don.jpg');
const jimF: string = require('../images/jim-f.jpg');
const JohnH: string = require('../images/john-h.jpg');
const brainM: string = require('../images/brian-m.jpg');
const garyL: string = require('../images/gary-l.jpg');
const jamesB: string = require('../images/jim-b.jpg');
const lukeS: string = require('../images/luke-s.jpg');

const members = [
  {
    imgUrl: don,
    title: "Don Wayne",
    text: "The leader of our band!",
    links: [
      {
        linkUrl: "#",
        linkText: "website",
      },
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
  {
    imgUrl: jimF,
    title: "Jim Fry",
    text: "Layin down those sick beats",
    links: [
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
  {
    imgUrl: JohnH,
    title: "John Herberling",
    text: "He plays a mean trumpet",
    links: [
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
  {
    imgUrl: brainM,
    title: "Brian Mills",
    text: "Biggest brass of the band, the trombone!",
    links: [
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
  {
    imgUrl: garyL,
    title: "Gary Longton",
    text: "Strummer",
    links: [
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
  {
    imgUrl: jamesB,
    title: "Jim Basset",
    text: "Basset plays bass",
    links: [
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
  {
    imgUrl: lukeS,
    title: "Luke Selbeck",
    text: "Those ivories won't tickle themselves",
    links: [
      {
        linkUrl: "#",
        linkText: "facebook",
      },
    ],
  },
];

export default function Band(): ReactElement {
  return (
    <>
      <Header/>
      <div className="mx-2">
        <div className="flex flex-wrap justify-center -mx-2 mt-10 px-10">
          {members.map(member => <PhotoCard {...member}></PhotoCard>)}
        </div>
      </div>
    </>
  );
}