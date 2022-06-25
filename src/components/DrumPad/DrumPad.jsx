import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import "./DrumPad.css";

const handlePlaySound = (key) => {
  document.querySelector(`#${key}`).play();
};

const DrumPad = ({ id, keyTrigger, url }) => {
  useEffect(() => {
    const keyEvent = ({ key }) =>
      key.toUpperCase() === keyTrigger && handlePlaySound(keyTrigger);
    window.addEventListener("keydown", keyEvent);

    return () => {
      window.removeEventListener("keydown", keyEvent);
    };
  }, [keyTrigger]);

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={() => handlePlaySound(keyTrigger)}
    >
      <div>{keyTrigger}</div>
      <audio
        id={`${keyTrigger}`}
        className="clip"
        src={url}
        itemType="audio/mp3"
      ></audio>
    </div>
  );
};

export default DrumPad;


DrumPad.propTypes = {
  id: PropTypes.string.isRequired,
  keyTrigger: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};