import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';

export default (
    <Switch>
        <Route
            exact
            path='/'
            component={HomePage}
        />
    </Switch>
);