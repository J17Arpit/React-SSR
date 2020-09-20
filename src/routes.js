import Home from './Components/Home';

import loadData from './helpers';

const Routes = [
    {
        path: '*',
        component: Home,
        loadData: () => loadData()
    },
];

export default Routes;