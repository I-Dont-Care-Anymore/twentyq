import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'normalize.css/normalize.css';
import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './About';
import { Explain } from './Explain';
import { LandingPage } from './LandingPage';
import { Overview } from './Overview';
import { Question } from './Question';

export class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact={true} component={LandingPage} />
                    <Route path="/about" component={About} />
                    <Route path="/explain" component={Explain} />
                    <Route path="/question" component={Question} />
                    <Route path="/overview" component={Overview} />
                </div>
            </Router>
        );
    }
}
