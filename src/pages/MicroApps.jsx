/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'
import { useParams, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import React, { useState } from 'react';

export default function MicroApps() {
    const navigate = useNavigate();
    let params = useParams();
    const [spinning, setSpinning] = useState(true);
    const { microAppId } = params;

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
                    // url={`https://${microAppId}.pages.dev/` } 
                    url={microAppId === 'react-project-template' ? 'http://127.0.0.1:8082/' : `https://${microAppId}.pages.dev/` } 
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