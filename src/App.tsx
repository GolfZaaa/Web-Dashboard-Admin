import React, { Fragment } from 'react';
import './App.css';
import HeaderPage from './components/screens/Header/HeaderPage';
import FooterPage from './components/screens/Footer/FooterPage';
import { Space } from 'antd';
import SlideMenu from './components/slidemenu/SlideMenu';
import ContentPage from './components/screens/Content/ContentPage';

function App() {
  return (
    <Fragment>
      <HeaderPage />
      <Space>
        <SlideMenu></SlideMenu>
        <ContentPage></ContentPage>
      </Space>
      <FooterPage />
    </Fragment>
  );
}

export default App;
