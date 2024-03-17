import React from 'react';
import Header from '../elements/Header';
import Intro from '../elements/Intro';
import IntroHeadings from '../IntroHeadings'; // Adjust the import path as needed
import Carousell from '../elements/Carousel';
import AccButton from '../elements/AccButton';
import introImg1 from '../assets/introImg1.png';
import introImg2 from '../assets/introImg2.jpeg';
import introImg3 from '../assets/introImg3.png';
import introImg4 from '../assets/introImg4.png';
import '../styles/home.css';

// Define getImage function to retrieve image paths based on index
function getImage(index) {
  switch (index) {
    case 0:
      return introImg1;
    case 1:
      return introImg2;
    case 2:
      return introImg3;
    case 3:
      return introImg4;
    default:
      return null;
  }
}

function HomePage() {
  const buttonNames = [
    {
      name: "Sign-up",
      link: "/register"
    },
    {
      name: "Login",
      link: "/login"
    }
  ];

  return (
    <div className='grad-background'>
      <div className='container-fluid '>
        <Header />
        <div className='introHead'>
          One stop for you to<br /> stay on track.
        </div>
        {IntroHeadings.map((heading, index) => (
          <Intro key={index} head={heading.head} content={heading.content} id={heading.id} image={getImage(index)} />
        ))}
        <div className='accButton'>
          <p className='para'>Take minimal efforts to get your life organized and be focused.
            Have a predetermined time plan and we'll help you to stick with it.</p>
          <h3 className='head3'>Create a free account or login, and start organizing</h3>
          {buttonNames.map((button, index) => (
            <AccButton key={index} name={button.name} link={button.link} />
          ))}
        </div>
        <Carousell />
        <div style={{ height: "500px", width: "500px" }}></div>
      </div>
    </div>
  );
}

export default HomePage;
