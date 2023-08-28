import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/internship');
  };

  return (
    <div className="home">
      <b>Welcome to BongTech Insights</b>
      <div className="big_header">
        Leading Software <br/><span>Technology</span><br/> Company<br/>
      </div>
      <div class="apply_button">
      <button type="submit" onClick={handleApplyClick}>Apply Here →</button>
      </div>
    </div>
  );
}
export default Home;