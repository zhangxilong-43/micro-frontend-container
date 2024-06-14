import { LogoutOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import {
  Button,
  Dropdown,
} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import defaultProps from './config/layoutDefaultProps.jsx';
import Routers from './Components/Routers.jsx';

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
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: 'Xilonng Zhang',
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: '退出登录',
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
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
            <ProCard
              style={{
                minHeight: 800,
              }}
            >
              <Routers/>
            </ProCard>
          </PageContainer>
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};