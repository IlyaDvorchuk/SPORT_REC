import React from 'react';
import cls from './OrganizationHeadCard.module.scss'
import {Avatar, Box} from "@mui/material";

import logoOrg from '/src/assets/images/raster/logo-org.png'

const OrganizationHeadCard = () => {
    return (
        <Box className={cls.card}>
            <div className={cls.cardBackground}/>
            <Box className={cls.cardBody}>
                <Avatar
                    src={logoOrg}
                    sx={{width: 140, height: 140}}
                    className={cls.avatar}

                />
            </Box>
        </Box>
    );
};

export default OrganizationHeadCard;