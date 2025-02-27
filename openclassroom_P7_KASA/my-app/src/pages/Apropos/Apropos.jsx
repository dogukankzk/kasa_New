import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import '../../assets/css/general.css';
import './Apropos.css';
import Banner from '../../components/banner/banner';
import BannerImage from '../../assets/image/about.png'
import aboutData from '../../data/about.json'; 


const Apropos = () => {
  return (
    <div>
      <div className="about">
        <Banner title="" image={BannerImage}/>
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} text={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Apropos;
