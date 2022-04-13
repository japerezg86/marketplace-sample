import {
  Home as HomeIcon,
  MonetizationOn as MarketplaceIcon
} from '@mui/icons-material';
import { MarketplaceListings } from '../components/MarketplaceListings';
import { Home } from '../pages/Home';
import { Route } from '../types/Route';



const routes: Array<Route> = [
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: Home,
    path: '/',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: 'router-dashboard',
    title: 'Marketplace',
    description: 'Marketplace',
    component: MarketplaceListings,
    path: '/marketplace',
    isEnabled: true,
    icon: MarketplaceIcon,
  },
];

export default routes;
