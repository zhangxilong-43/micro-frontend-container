import {
    Html5TwoTone,
    CrownFilled,
    SmileFilled,
    SlidersTwoTone,
  } from '@ant-design/icons';
  
  export default {
    route: {
      path: '/',
      routes: [
        {
          path: '/container',
          name: '容器页面',
          icon: <SmileFilled />,
        },
        {
          path: '/microApp',
          name: '微应用',
          icon: <CrownFilled />,
          routes: [
            {
              path: '/microApp/react-h5-template',
              name: 'React H5 模版',
              icon: <Html5TwoTone />,
            },
            {
              path: '/microApp/flow-drawing-tool',
              name: '流程绘制工具',
              icon: <SlidersTwoTone />,
            },
            {
              path: '/microApp/react-project-template',
              name: 'React 项目模版',
              icon: <SlidersTwoTone />,
            },
          ],
        },
      ],
    },
    location: {
      pathname: '/container',
    },
  };