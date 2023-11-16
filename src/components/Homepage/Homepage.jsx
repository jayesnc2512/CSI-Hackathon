import React, { useState, useRef, useEffect } from "react";
import "./Homepage.css"; // Create Homepage.css file for styling
import logo from "../assets/logo.png";
import toggle from "../assets/toggle.png";
import soundoff from "../assets/icon-sound-off.png";
import soundon from "../assets/icon-sound-on.png";
import bgsound from "../assets/bg-sound.mp3";
import frame from "../frame.jsx";
import { Link } from "react-router-dom";
const Homepage = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    audioRef.current.volume = 0.075;
    audioRef.current.addEventListener("ended", handleAudioEnded);

    // return () => {
    //   audioRef.current.removeEventListener("ended", handleAudioEnded);
    // };
  }, []);

  const handleAudioEnded = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="homepage-container">
      <div className="logo">
        <img src={logo} width="25" alt="logo" />
      </div>
      <div className="about">
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>
      {/* <div className="switch">
        <img src={toggle} width="40" alt="toggle" />
      </div> */}
      <div className="achieve">
        <button>
          <Link to="/achievements">Achievements</Link>
        </button>
      </div>
      <div className="exp">
        <button>
          <Link to="/experience">Experience</Link>
        </button>
      </div>
      <div className="mainimg">
        {/* <img src={logo} width="50" alt="mainimg" /> */}
        <frame />
      </div>
      <div className="social">
        <button className="social-icons">
          <span className="label-up">twitter</span>
          <span className="label-up">twitter</span>
        </button>
        <span>/</span>
        <button className="social-icons">
          <span className="label-up">linkedin</span>
          <span className="label-up">linkedin</span>
        </button>
      </div>
      <div className="projects">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="sound">
        <button className="sound-btn" onClick={toggleAudio}>
          <img src={isPlaying ? soundon : soundoff} alt="Sound Toggle" />
        </button>
        <audio ref={audioRef} src={bgsound} />
      </div>
    </div>
  );
};

export default Homepage;