import React, { useState } from 'react';
import './App.css';

import cabbage from './assets/image1.jpeg';
import mango from './assets/image2.jpeg';
import fig from './assets/image3.jpeg';
import gaze from './assets/image4.jpeg';
import peach from './assets/image5.jpeg';
import avocado from './assets/image6.jpeg';

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <aside>
      <div className='loading-bar'>
        <label htmlFor='images-loaded'>Loading your favorite images...</label>
        <progress id='images-loaded' max='100' value='50'></progress>
      </div>
    </aside>
  )
}

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = () => {
    setImageIndex(ii => (ii + 1) % images.length);
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
        <Loading />
        <figcaption>{imageIndex + 1} / {images.length}</figcaption>
        <img src={images[imageIndex]} alt='' onClick={handleClick} />
      </figure>
    </section>
  );
}

export default App;
