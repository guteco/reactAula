import React from 'react';
//importando os gerenciadores de rota
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importando a página de logon e setando a raiz "/" como a página de login
// com o código <Route path="/" component={Logon} />
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}
