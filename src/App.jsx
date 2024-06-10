import React from 'react';
import './style/App.less';
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import MicroApps from './Components/MicroApps';
import Menu from './Components/Menu';
import Error from './Components/Error';
import Container from './Components/Container';

export default function App() {
    return (
        <div id='project-container'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/micro-apps/:microAppId" element={<MicroApps />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}