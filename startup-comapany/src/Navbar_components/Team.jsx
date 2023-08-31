import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { HiExclamationCircle } from "react-icons/hi";
import { AiFillHome, AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Abhay_Nath from './Team_images/Abhay_Nath.jpg';
import Dhruv_Panpalia from './Team_images/Dhruv_Panpalia.jpg';

function Contact() {
  return (
    <div>
      <div className="team">
        <div className="team_heading">
          <div className="team_item">
            <h1>Team</h1>
            <h3><AiFillHome className='icon_n' /> Home → Team</h3>
          </div>
        </div>
      </div>
      <div className="professional_people">
        <div>
          <h3><FiActivity /> Professional People <FiActivity /></h3>
          <h1>Meet our Team members</h1>
        </div>
        <div class="vertical-line"></div>
        <div>
        <h2>Our dedicated team actively provides continous support and task accomplishments in businesses.</h2>
        </div>
      </div>
{/* ------------------------------images------------------------------ */}
      <div className="team_img">
      <div className='images'>
{/* -------------------------------------------------------------------------- */}
        <div className="tm_img">
          <div className='icon_spc'>
            <img src={Abhay_Nath} alt="Abhay Nath" className='img'/>
            <div className='sc_profile'>
              <a href="https://www.linkedin.com/in/abhaynath001/"><AiFillLinkedin className='icon' /></a>
              <a href="https://github.com/AbhayNath001"><AiFillGithub className='icon' /></a>
              <a href="https://www.youtube.com/@abhaynath001"><AiFillYoutube className='icon' /></a>
            </div>
          </div>
          <h2><span>Abhay</span> Nath <a href="https://www.linkedin.com/in/abhaynath001/details/skills/"><HiExclamationCircle class="share_icon" /></a></h2>
          <p>CEO & Founder</p>
        </div>
{/* -------------------------------------------------------------------------- */}
        <div className="tm_img">
          <div className='icon_spc'>
            <img src={Dhruv_Panpalia} alt="Dhruv Panpalia" />
            <div className='sc_profile'>
              <a href="https://www.linkedin.com/in/dhruv-panpalia-744a28226/"><AiFillLinkedin className='icon' /></a>
            </div>
          </div>
          <h2><span>Dhruv</span> Panpalia <a href="https://www.linkedin.com/in/dhruv-panpalia-744a28226/details/skills/"><HiExclamationCircle class="share_icon" /></a></h2>
          <p>Business Analyst</p>
        </div>
{/* -------------------------------------------------------------------------- */}
      </div>
      </div>
{/* ------------------------------images------------------------------ */}
      <div className='team_footer'>
        <MdEmail className='footer_icon' />
        <div className='footer_label'>
          <h3>Email Us</h3>
          <h2>21dit040@charusat.edu.in</h2>
        </div>
        <FaMapMarkerAlt className='footer_icon' />
        <div className='footer_label'>
          <h3>Location</h3>
          <h2>Kolkata, West Bengal, India</h2>
        </div>
      </div>
      <div className='social_platforms'>
        <h3>© 2023 BongTech Insights. All Rights Reserved.</h3>
        <a href="https://www.linkedin.com/company/kol-tech-insights/"><AiFillLinkedin className='icon' /></a>
      </div>
    </div>
  );
}
export default Contact;