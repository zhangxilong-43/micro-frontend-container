import React from 'react';
import './style/App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MicroApps from './Components/MicroApps';
import Menu from './Components/Menu';
import Error from './Components/error';

export default function App() {
    return (
        <div id='project-container'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/micro-apps/:microAppId" element={<MicroApps />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}