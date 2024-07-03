import React from 'react';
import cls from './Header.module.scss'

import LogoSvg from '/src/assets/images/svg/logo.svg'
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem } from '@mui/material';
import Container from "../Container/Container";

const Header = () => {
    return (
        <AppBar position="sticky" className={cls.appBar} color={'inherit'}>
            <Container>
                <Toolbar className={cls.toolbar}>
                    <Typography variant="h1" className={cls.logo}>
                        <img src={LogoSvg} alt="SPORT REC"/>
                    </Typography>
                    <Typography className={cls.navItem}>Спортивная борьба</Typography>
                    <Typography className={cls.navItem}>Рейтинги</Typography>
                    <Typography className={cls.navItem}>Соревнования</Typography>
                    <Typography className={cls.navItem}>Организации</Typography>
                    <Select
                        value="RU"
                        className={cls.languageSelect}
                        variant="standard"
                    >
                        <MenuItem value="RU">RU</MenuItem>
                        <MenuItem value="EN">EN</MenuItem>
                    </Select>
                    <IconButton color="inherit">
                        {/*<NotificationsIcon />*/}
                    </IconButton>
                    <div className={cls.rightIcons}>
                        <img src={LogoSvg} alt="logo" className={cls.logoImage} />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;