import * as React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer
} from '@material-ui/core';

import {
  Menu
} from '@material-ui/icons';

import { DrawerMenu } from './DrawerMenu';
import { HomePage } from './HomePage';
import { Accounts } from './Accounts';
import { MyAppsPage } from './MyAppsPage';

interface ApplicationState {
  drawerOpen: boolean
};

export class Application extends React.Component<{}, ApplicationState> {
  constructor() {
    super({});
    this.state = {
      drawerOpen: false
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <AppBar position="static">
              <Toolbar>
                <IconButton onClick={this.setDrawerOpen(true)}>
                  <Menu />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer open={this.state.drawerOpen} onClose={this.setDrawerOpen(false)}>
              <DrawerMenu itemClick={this.setDrawerOpen(false)} />
            </Drawer>
          </div>
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/accounts" component={Accounts} />
              <Route path="/myapps" component={MyAppsPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
  setDrawerOpen(value: boolean) {
    return () => {
      this.setState({
        drawerOpen: value
      });
    };
  }
}