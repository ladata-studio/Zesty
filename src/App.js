import React, { useState } from 'react';
import './App.css';

const images = [
  'https://i.ibb.co/yF1hMQ6/image1.jpg',
  'https://i.ibb.co/DKnJbmv/image2.jpg',
  'https://i.ibb.co/NnSzy4w/image3.jpg',
  'https://i.ibb.co/9TbfHnR/image4.jpg',
  'https://i.ibb.co/59hZg7g/image5.jpg',
  'https://i.ibb.co/xHXGzSz/image6.jpg'
];

const Loading = ({ max, value }) => {
  return (
    <aside>
      <div className='loading-bar'>
        <label htmlFor='images-loaded'>Loading your favorite images...</label>
        <progress
          id='images-loaded'
          max={max}
          value={value}>
        </progress>
      </div>
    </aside>
  )
}

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    setImageIndex(ii => (ii + 1) % images.length);
  }

  const handleImageLoad = () => {
    setNumLoaded(nl => nl + 1);
  }

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project<br />
          by Ella Fieldling
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && <Loading max={images.length} value={numLoaded} />}
        <figcaption>{imageIndex + 1} / {images.length}</figcaption>
        {images.map((imageURL, index) =>
          <img
            key={imageURL}
            src={imageURL}
            alt=''
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={imageIndex === index ? 'display' : 'hide'}
          />
        )}
      </figure>
    </section>
  );
}

export default App;
