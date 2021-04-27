import React from 'react';

import './crop.css';

const Crop: React.FC = ({ children }) => {
  return (
    <div className="crop">
      <div className="top" />
      {children}
      <div className="bottom" />
    </div>
  );
};

export default Crop;
