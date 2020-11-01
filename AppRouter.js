import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StyledDropzone from '../components/App';
import App from '../components/App';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
    <h1>Upload Files here</h1>
      <div className="main-content">
        <Switch>
          <Route component={App} path="/" exact={true} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);
export default AppRouter;