import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DisplayInfoContainer from './contact/containers/DisplayInfo';
import EditInfoContainer from './contact/containers/EditInfo';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DisplayInfoContainer} />
      <Route path="/edit" component={EditInfoContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
