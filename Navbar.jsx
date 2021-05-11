import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
// import logo from 'HoneyDutch-Blunt.jpg';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';



const Navbar = ({totalItems}) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
  
    const renderMobileMenu = (
      <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        <MenuItem>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Menu>
    );    

    

    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={'https://scontent.ford4-1.fna.fbcdn.net/v/t1.6435-9/60735460_2380148222005361_2668636079208267776_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=wXmOAA1SWdEAX-7S2wL&_nc_ht=scontent.ford4-1.fna&oh=59f3717c75bec4e7b7d54a509f05bc19&oe=60AD95C2'} alt="Commerce.js" height="25px" className={classes.image} />
                    jewlery
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        </>
    );
};

export default Navbar;
