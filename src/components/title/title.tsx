import React from 'react';

import './title.css';

interface TitleInterface {
  title: string;
  size: number;
}

const Title: React.FC<TitleInterface> = ({ title = 'Lorem', size = 30 }) => {
  return <div className="title">{title}</div>;
};

export default Title;
