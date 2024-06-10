import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import MenuItems from '../config/microApps';

const App = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    navigate(`/micro-apps/${e.key}`);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={MenuItems} />;
};

export default App;