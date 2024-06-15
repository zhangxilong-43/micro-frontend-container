import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import defaultProps from './config/layoutDefaultProps.jsx';
import Routers from './Components/Routers.jsx';
import './style/App.less';

export default () => {
  const [pathname, setPathname] = useState('/container');
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          fixSiderbar={true}
          layout='mix'
          splitMenus={true}
          location={{
            pathname,
          }}
          siderMenuType="group"
          menu={{
            collapsedShowGroupTitle: true,
          }}
          headerTitleRender={() => <></>}
          avatarProps={{
            src: 'https://avatars.githubusercontent.com/u/65009690?v=4',
            size: 'small',
            title: 'Xilonng Zhang',
            render: (props, dom) => {
              return (
                <div onClick={() => window.open('https://github.com/zhangxilong-43')}>
                  {dom}
                </div>
              );
            },
          }}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                navigate(item.path || '/container');
                setPathname(item.path || '/container');
              }}
            >
              {dom}
            </div>
          )}
        >
          <PageContainer>
            <ProCard>
              <Routers/>
            </ProCard>
          </PageContainer>
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};