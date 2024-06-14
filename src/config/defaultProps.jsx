import {
    Html5TwoTone,
    TabletFilled,
    SlidersTwoTone,
    SmileFilled
  } from '@ant-design/icons';

  export default {
    route: {
      path: '/',
      routes: [
        {
          path: '/welcome',
          name: '容器页面',
          icon: <SmileFilled />,
        },
        {
          name: '微应用模块',
          icon: <TabletFilled />,
          path: '/microApp',
          routes: [
            {
              path: '/react-h5-template',
              name: 'React H5 模版',
              icon: <Html5TwoTone />,
            },
            {
              path: '/flow-drawing-tool',
              name: '流程绘制工具',
              icon: <SlidersTwoTone />,
            }
          ],
        }
      ],
    },
    location: {
      pathname: '/',
    },
  };