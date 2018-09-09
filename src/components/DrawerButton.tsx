import * as React from 'react';

import { Link } from 'react-router-dom';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

export interface DrawerButtonProps {
  text: string,
  icon: React.ComponentType,
  onClick: (itemName: string) => void
};

export class DrawerButton extends React.Component<DrawerButtonProps, {}> {
  constructor(props: DrawerButtonProps) {
    super(props);
  }
  render() {
    return (
      <Link to={this.props.text.toLowerCase()}>
        <ListItem button={true}>
          <ListItemIcon>
            <this.props.icon />
          </ListItemIcon>
          <ListItemText primary={this.props.text} onClick={() => this.props.onClick(this.props.text)} />
        </ListItem>
      </Link>
    );
  }
}