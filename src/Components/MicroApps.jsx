/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useParams, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import MenuItems from '../config/microApps';
import React, { useState } from 'react';

export default function MicroApps() {
    const team = useParams();
    const navigate = useNavigate();
    const [spinning, setSpinning] = useState(true);
    const { microAppId } = team ?? {};
    const appList = MenuItems.map(item => item.key);
    // const errMicroAppId = !appList.includes(microAppId);

    const onErrorCallback = () => {
        setSpinning(false);
        navigate(`/404`);
        // navigate(`/micro-apps/${appList[0]}`);
        console.log('onErrorCallback');
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