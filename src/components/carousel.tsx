import React, { ReactElement } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const album1 = require('../images/album-1.jpg');
const herbPoster = require('../images/herb-poster.jpg');
const tripleDoor = require('../images/triple-door.jpg');

const pics = [
  {
    src: album1,
    text: 'What a great pic',
    alt: 'album cover picture',
  },
  {
    src: herbPoster,
    text: 'Look at us!',
    alt: 'herb poster picture',
  },
  {
    src: tripleDoor,
    text: 'There he is!',
    alt: 'triple door picture',
  },
];

export default (): ReactElement => (
  <Carousel autoPlay={true}>
    {pics.map(pic => (
      <div>
          <img src={pic.src} alt={pic.alt} />
          <p className="legend">{pic.text}</p>
      </div>
    ))}
  </Carousel>
);
