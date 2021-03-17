import React, { useEffect, useState } from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import Crud from './Crud';
import axios from 'axios';

const HomePage = () => {
  let [apodData, setApodData] = useState();

  useEffect(() => {
    getAPODfromNasa();
  }, []);

  let getAPODfromNasa = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=pb0XEL7bgcYkEUCk0RhqdD2mIvWsKrkalFU3U0kW'
      )
      .then((res) => setApodData(res.data))
      .catch((err) => console.error(err.data.message));
  };

  let getRandomPicture = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=pb0XEL7bgcYkEUCk0RhqdD2mIvWsKrkalFU3U0kW&count=1'
      )
      .then((res) => setApodData(res.data[0]))
      .catch((err) => console.error(err.data.message));
  };

  let displayApod = () => {
    if (apodData) {
      return (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h3>
            {apodData.title} - {apodData.date}
          </h3>
          <img
            src={apodData.hdurl}
            alt={apodData.title}
            style={{ maxWidth: '37%', margin: '0 auto' }}
          />
          <p
            style={{
              margin: '1em auto',
              width: '75vh',
            }}
          >
            {apodData.explanation}
          </p>
        </div>
      );
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h4 style={{ marginBottom: 0 }}>
        Mix and save your favorite NASA photos
      </h4>
      <h4 style={{ marginTop: 0 }}>
        Let's start with the Astronomy Picture Of The Day{' '}
      </h4>
      {displayApod()}
      <Crud apodData={apodData} getRandomPicture={getRandomPicture} />
      <AmplifySignOut />
    </div>
  );
};

export default HomePage;
