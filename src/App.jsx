import {
    GithubFilled
  } from '@ant-design/icons';
  import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
  import { ProConfigProvider } from '@ant-design/pro-provider';
  import { useState } from 'react';
  import MicroApps from './Components/MicroApps';
  import defaultProps from './config/defaultProps';
  
  export default () => {
    const [pathname, setPathname] = useState('/react-h5-template');
  
    return (
      <ProConfigProvider dark={true} hashed={false}>
        <ProLayout
          {...defaultProps}
          splitMenus={true}
          location={{ pathname }}
          menu={{ collapsedShowGroupTitle: true }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <p
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                Power by Xilonng
              </p>
            );
          }}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path);
              }}
            >
              {dom}
            </div>
          )}
          actionsRender={() => <GithubFilled key="GithubFilled" />}
        >
          <PageContainer>
            <ProCard
              style={{
                // height: '100vh',
                minHeight: 800,
              }}
            >
              <MicroApps pathname={pathname} />
            </ProCard>
          </PageContainer>
        </ProLayout>
      </ProConfigProvider>
    );
  };