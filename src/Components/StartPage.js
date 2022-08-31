import React from 'react';

const StartPage = ({ setPlay }) => {
  return (
    <section className="section-start">
      <h1>rock, papper, scissors</h1>
      <button className="btn section-start-btn" onClick={() => setPlay(true)}>
        Start
      </button>
    </section>
  );
};

export default StartPage;
