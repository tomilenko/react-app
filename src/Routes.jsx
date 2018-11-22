import Main from './components/Main';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutPageTest from './pages/AboutPageTest';

const Routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/test",
        component: AboutPageTest
    }
];

export default Routes;

