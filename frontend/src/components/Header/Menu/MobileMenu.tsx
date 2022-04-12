import { Box, Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeModeContext } from '../../../contexts';
import { SignOut } from '../../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';


interface MobileMenuProps {
  isMenuOpen: boolean;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const MobileMenu = ({ isMenuOpen, handleMenuOpen, handleMenuClose, anchorEl }: MobileMenuProps) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ textAlign: 'center' }}>
        <MenuItem onClick={toggleThemeMode}>
          <ThemeSwitcher disableTooltip />
          Toggle Theme
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <SignOut disableTooltip onClick={() => alert('Signing out...')} />
          Sign Out
        </MenuItem>
      </Box>
    </Menu>
  );
};
