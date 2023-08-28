import React from 'react';
import Abhay_Nath from './Team_images/Abhay_Nath.jpg';

function Contact() {
  return (
    <div>
      <div className="team">
        <div className="team_heading">
          <div className="team_item">
            <h1>Team</h1>
            <h3>🏠 Home → Team</h3>
          </div>
        </div>
      </div>
      <div className="professional_people">
        <div>
          <h3>Professional People</h3>
          <h1>Meet our Team members</h1>
        </div>
        <div class="vertical-line"></div>
        <div>
        <h2>Our dedicated team actively provides continous support and task accomplishments in businesses.</h2>
        </div>
      </div>
      <div className="team_img">
        <div className="tm_img">
          <img src={Abhay_Nath} alt="Abhay Nath" />
          <h2><span>Abhay</span> Nath</h2>
          <p>CEO & Founder</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;