import React from 'react';
import data_science from './Internship_images/data_science.png';
import web_dev from './Internship_images/web_dev.png';

function Internship() {
  return (
    <div className="internship">
      <div className='internships'>
        <div className='intern'>
          <h3>Artificial Intelligence & Machine Learning</h3>
          <div className='intern_img'>
            <img src={data_science} alt="AI & ML" />
          </div>
          <h5>Remote Artificial Intelligence & Machine Learning Internships Provide a Distinctive Opportunity
             to Acquire Valuable Experience Amidst the Virtual Work Landscape, All While Engaging with Premier
              Organizations in the Domain. Within the Realm of Data Science, Internships Focused on AI & ML
               Garner Significant Interest Due to Their Competitive and High-Demand Nature.</h5>
          <div class="apply_button">
            <a href="https://forms.gle/kiLmf2NgjKX3SVU19">
              <button type="button">Apply Now</button>
            </a>
          </div>
        </div>
        <div className='intern'>
          <h3>Data Science with Python</h3>
          <div className='intern_img'>
            <img src={data_science} alt="Data Science" />
          </div>
          <h5>Remote Data Science Internships Are A Unique Chance To Gain Experience In The Midst Of The
             Virtual Workforce While Remaining Immersed In One Of The Top Organizations In The Field. Data
              Analysis Internships Are Some Of The Most Competitive And Popular Within The Broader Data Science
               Field.</h5>
          <div class="apply_button">
            <a href="https://forms.gle/kiLmf2NgjKX3SVU19">
              <button type="button">Apply Now</button>
            </a>
          </div>
        </div>
        <div className='intern'>
          <h3>Web Development</h3>
          <div className='intern_img'>
            <img src={web_dev} alt="Web Development" />
          </div>
          <h5>The Web Development Internship Offers Practical Work Experience And An Introduction To Creating
             And Improving Web-Based Systems. This Internship Will Involve Challenging Opportunities, Real
              World Projects. It's A Fantastic Opportunity To Gain Hands-On Experience In The Web And/Or App
               Development Field With An Award-Winning Innovation Team.</h5>
          <div class="apply_button">
            <a href="https://forms.gle/kiLmf2NgjKX3SVU19">
              <button type="button">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Internship;