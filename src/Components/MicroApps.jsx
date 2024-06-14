/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useParams, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import MenuItems from '../config/microApps';
import React, { useState } from 'react';

export default function MicroApps(props) {
    const navigate = useNavigate();
    const [spinning, setSpinning] = useState(true);
    const { pathname: microAppId } = props;

    const onErrorCallback = () => {
        setSpinning(false);
        navigate('/404');
    }

    return (
        <>
            <Spin spinning={spinning} fullscreen />
            {
                microAppId ? <micro-app 
                    name={microAppId} 
                    url={`https://${microAppId}.pages.dev/` } 
                    onMounted={() => setSpinning(false)}
                    onUnmount={() => setSpinning(true)}
                    onError={() => onErrorCallback()}
                ></micro-app>
                :
                null
            }
        </>
    )
}