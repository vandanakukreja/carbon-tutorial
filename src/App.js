import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import landingPage from './content/landingPage';
import devicePage from './content/devicePage';
import userPage from './content/userPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={landingPage} />
            <Route path="/devices" component={devicePage} />
            <Route path="/users" component={userPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
