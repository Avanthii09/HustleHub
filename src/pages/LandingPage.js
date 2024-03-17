import React from 'react';
import IntroHeadings from '../IntroHeadings';
import introImg1 from '../assets/introImg1.png';
import introImg2 from '../assets/introImg2.jpeg';
import introImg3 from '../assets/introImg3.png';
import introImg4 from '../assets/introImg4.png';
import AccButton from "../elements/AccButton";
import Header from "../elements/Header";
import Intro from "../elements/Intro";
import '../styles/landing.css'



function LandingPage() {


  const buttonNames = [
    {
    name: "TODO",
    link: "/todo"
    },
    {
    name: "HABIT TRACKER",
    link: "/habittracker"
    },
    {
      name: "TIMER",
      link: "/pomodorotimer"
  },
    {
      name: "INCOME TRACKER",
      link: "/incometracker"
}];

  return (
    <div className='grad-background'>
    <div className='container-fluid'>
      
      <Header/>
      
        <Intro id={IntroHeadings[0].id} image={introImg1}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[0].content}</p>
            <AccButton name={buttonNames[0].name} link={buttonNames[0].link}/>
        </div>
      
        <Intro id={IntroHeadings[1].id} image={introImg2}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[1].content}</p>
            <AccButton name={buttonNames[1].name} link={buttonNames[1].link}/>
        </div>

        <Intro id={IntroHeadings[2].id} image={introImg3}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[2].content}</p>
            <AccButton name={buttonNames[2].name} link={buttonNames[2].link}/>
        </div>

        <Intro id={IntroHeadings[3].id} image={introImg4}/>
        <div className='landingButtons'>
            <p>{IntroHeadings[3].content}</p>
            <AccButton name={buttonNames[3].name} link={buttonNames[3].link}/>
        </div>
      
      
      <div style={{height:"500px", width:"500px"}}></div>
    </div>
    </div>
  );
}

export default LandingPage;