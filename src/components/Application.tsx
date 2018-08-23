import * as React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer
} from '@material-ui/core';

import {
  Menu
} from '@material-ui/icons';

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
      <div>
        <AppBar>
          <Toolbar>
            <IconButton onClick={this.setDrawerOpen(true)}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.setDrawerOpen(false)}>
        </Drawer>
      </div>
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