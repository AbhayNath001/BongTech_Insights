import React from 'react';
import about_img from './about-image.png';
import { FiActivity } from 'react-icons/fi';
import { GrGrow } from "react-icons/gr";

function About() {
  return (
    <div className="about">
      <div className='about_img'>
        <img src={about_img} alt="about" />
      </div>
      <div className='about-header'>
        <b><FiActivity /> Who We Are <FiActivity /></b>
        <h3>We are a pioneering startup with a mission to promote, develop, and showcase cutting-edge
           technologies conceived and crafted on Indian soil. Our platform serves as a dynamic hub where
            innovation knows no boundaries, and the ingenuity of Indian minds takes center stage.</h3>
        <b> <GrGrow /> Our Vision</b>
        <h3>At BongTech Insights, we envision a future where India's technological prowess shines brightly
           across the world. Our dedicated team is committed to identifying, nurturing, and accelerating the
            growth of homegrown technologies, ensuring they receive the recognition and attention they
             rightfully deserve.</h3>
      </div>
    </div>
  );
}
export default About;