import { SlidersOutlined, Html5Outlined } from '@ant-design/icons';

const microApps = {
    'APP_1': 'react-h5-template',
    'APP_2': 'flow-drawing-tool',
};

const MenuItems = [
    {
      label: microApps['APP_1'],
      key: microApps['APP_1'],
      icon: <Html5Outlined />,
    },
    {
      label: microApps['APP_2'],
      key: microApps['APP_2'],
      icon: <SlidersOutlined />,
    }
];

export default MenuItems