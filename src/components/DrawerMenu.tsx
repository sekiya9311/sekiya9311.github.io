import * as React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';

import {
  AccountBox
} from '@material-ui/icons';

export class DrawerMenu extends React.Component<{}, {}> {
  constructor() {
    super({});
  }
  render() {
    return (
      <div>
        <List>
          <Link to="/">
            <ListItem button={true} >
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="accounts">
            <ListItem button={true} >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}