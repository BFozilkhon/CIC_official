import Generic from '../components/Generic';
import Home from '../components/Home';

export const data = [
  {
    id: 1,
    title: 'Home',
    path: '/main',
    Component: Home,
  },
  {
    id: 2,
    title: 'About us',
    path: '/about',
    Component: Generic,
  },
  {
    id: 3,
    title: 'Contact us',
    path: '/contact',
    Component: Generic,
  },
  {
    id: 4,
    title: 'Apply now',
    path: '/apply',
    Component: Generic,
  },
];
