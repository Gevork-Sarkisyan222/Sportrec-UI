import React, { useState } from 'react';
import './news.scss';
import CloseIcon from '@mui/icons-material/Close';

const News: React.FC = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  const dots = [0, 1, 2, 3, 4];

  return (
    <>
      <div className="news-container">
        <CloseIcon sx={{ color: 'white' }} className="close-icon" />
        <img src="https://i.ytimg.com/vi/jTP00Msm7CQ/maxresdefault.jpg" alt="news banner image" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div className="toggle-dots">
          {dots.map((dot, index) => (
            <div
              key={index}
              className={`dot ${active === index ? 'activeDot' : ''}`}
              onClick={() => handleClick(index)}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
