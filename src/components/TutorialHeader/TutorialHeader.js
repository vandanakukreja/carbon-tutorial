import React from 'react';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      MaaS360
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/devices">
        Devices
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/users">
        User
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/security">
        Security
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/setup">
        Set Up
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
