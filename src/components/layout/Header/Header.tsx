import React, {useState} from 'react';
import i18n from "i18next";
import { AppBar, Toolbar, Typography, IconButton, Select, MenuItem } from '@mui/material';

import cls from './Header.module.scss'
import LogoSvg from '/src/assets/images/svg/logo.svg'
import Container from "../Container/Container";
import Navbar from "../../navigation/Navbar/Navbar";
import {LanguageTypes} from "../../../config/i18n/constants";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/redux";

const Header = () => {
    const userData = useAppSelector((state) => state.user);

    const [language, setLanguage] = useState(i18n.language)

    const onChangeLanguage = (language: LanguageTypes.ru | LanguageTypes.en) => {
        i18n.changeLanguage(language)
        setLanguage(language)
    }

    return (
        <AppBar position="sticky" className={cls.appBar} color={'inherit'}>
            <Container>
                <Toolbar className={cls.toolbar}>
                    <Typography variant="h1" className={cls.logo}>
                        <img src={LogoSvg} alt="SPORT REC"/>
                    </Typography>
                    <Navbar/>
                    <Select
                        value={language}
                        className={cls.languageSelect}
                        variant="standard"
                    >
                        <MenuItem value="ru" onClick={() => onChangeLanguage(LanguageTypes.ru)}>
                            RU
                        </MenuItem>
                        <MenuItem value="en" onClick={() => onChangeLanguage(LanguageTypes.en)}>
                            EN
                        </MenuItem>
                    </Select>

                    <div className={cls.rightIcons}>
                        <Link to={'/register'}>
                            <img src={LogoSvg} alt="logo" className={cls.logoImage} />

                        </Link>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;