import React from 'react';
import './style/App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MicroApps from './Components/MicroApps';
import Menu from './Components/Menu';
import ErrorInfo from './Components/ErrorInfo';
import Container from './Components/Container';

export default function App() {
    return (
        <div id='project-container'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/micro-apps/:microAppId" element={<MicroApps />} />
                    <Route path="*" element={<ErrorInfo />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}