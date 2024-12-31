import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [lightPollution, setLightPollution] = useState(null);
  const [error, setError] = useState(null);

  const fetchLightPollution = async () => {
    try {
      setError(null); // Clear previous errors
      const { coords } = await getGeolocation();
      const response = await axios.get(
        // FIND API, PUT IT HERE
            );
      setLightPollution(response.data);
    } catch (err) {
      setError('Unable to fetch light pollution data. Please try again later.');
    }
  };

  const getGeolocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by your browser.'));
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchLightPollution} className="fetch-button">
          Show Light Pollution
        </button>
        {lightPollution && (
          <div className="pollution-data">
            <h3>Light Pollution Level</h3>
            <p>{lightPollution.level}</p>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </header>
    </div>
  );
}

export default App;
