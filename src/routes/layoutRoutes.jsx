import Dashboard from '../layouts/Dashboard';
import Pages from '../layouts/Pages';
import HomePage from '../pages/HomePage';
import { appRouteVariables } from './variables';

const indexRoutes = [
	{ path: appRouteVariables.HOME, name: "Home", component: HomePage },
	{ path: appRouteVariables.PAGES, name: "Pages", component: Pages },
	{ path: appRouteVariables.DASHBOARD, name: "Dashboard", component: Dashboard }
]

export default indexRoutes;