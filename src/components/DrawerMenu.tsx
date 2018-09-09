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
  AccountBox,
  Build,
  Face
} from '@material-ui/icons';

import { DrawerButton } from './DrawerButton';

interface DrawerMenuProps {
  itemClick: (itemName: string) => void
}

export class DrawerMenu extends React.Component<DrawerMenuProps, {}> {
  constructor(props: DrawerMenuProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <List>
          <Link to="/">
            <ListItem button={true} >
              <ListItemText primary="Home" onClick={() => this.props.itemClick("Home")} />
            </ListItem>
          </Link>
          <Divider />
          <DrawerButton text="Profile" icon={Face} onClick={this.props.itemClick} />
          <DrawerButton text="Products" icon={Build} onClick={this.props.itemClick} />
          <DrawerButton text="Accounts" icon={AccountBox} onClick={this.props.itemClick} />
        </List>
      </div>
    );
  }
}